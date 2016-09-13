import cheerio from 'cheerio';

export default function getCorrectUrls(word) {
  return fetch(`https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20html%20WHERE%20url%3D%22http%3A%2F%2Fwww.ldoceonline.com%2Fsearch%2F%3Fq%3D${word}%22&diagnostics=true`)
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
        return [`https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20html%20WHERE%20url%3D%22http%3A%2F%2Fwww.ldoceonline.com%2Fdictionary%2F${word}%22`]
      } else {
        let correctUrls = [];
        for(let i = 1; i <= urlsNumber; i++) {
          correctUrls.push(`https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20html%20WHERE%20url%3D%22http%3A%2F%2Fwww.ldoceonline.com%2Fdictionary%2F${word}_${i}%22`)
        }
        return correctUrls;
      }
    })
    .catch(err => console.log(err));
}
