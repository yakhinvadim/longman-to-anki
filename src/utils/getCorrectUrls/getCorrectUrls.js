import cheerio from 'cheerio';
import composeQuery from '../composeQuery/composeQuery.js'

export default function getCorrectUrls(word) {
  return fetch(composeQuery({ type: 'search', word: word }))
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
        return [composeQuery({ type: 'entry', word: word })]
      } else {
        let correctUrls = [];
        for(let i = 1; i <= urlsNumber; i++) {
          correctUrls.push(composeQuery({ type: 'entry', word: `${word}_${i}` }))
        }
        return correctUrls;
      }
    })
    .catch(err => console.log(err));
}
