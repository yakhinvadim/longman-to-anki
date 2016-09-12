import cheerio from 'cheerio';

export default function getCorrectUrls(word) {
  return fetch(`http://www.ldoceonline.com/search/?q=${word}`)
    .then(resp => {
      return resp.text()
    })
    .then(body => {
      let $ = cheerio.load(body);
      const urlsNumber =
        $('span.headword')
          .map((i, item) => $(item).text())
          .get()
          .filter(currentWord => currentWord === word)
          .length;

      return urlsNumber;
    })
    .then(urlsNumber => {
      if(urlsNumber < 2) {
        return [`http://www.ldoceonline.com/dictionary/${word}`]
      } else {
        correctUrls = [];
        for(let i = 1; i <= urlsNumber; i++) {
          correctUrls.push(`http://www.ldoceonline.com/dictionary/${word}_${i}`)
        }
        return correctUrls;
      }
    })
    .catch(err => console.log(err));
}
