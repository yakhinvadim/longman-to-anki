import cheerio from 'cheerio';
import composeQuery from '../composeQuery/composeQuery.js';
import R from 'ramda';

export default function getCorrectUrls(word) {
  return fetch(composeQuery({ type: 'search', word: word }))
    .then(resp => resp.text())
    .then(body => {
      let $ = cheerio.load(body);
      const urlsNumber =
        $('span.headword')
          .map((i, item) => $(item).text())
          .get()
          .filter(R.equals(word))
          .length;

      return urlsNumber;
    })
    .then(urlsNumber => {
      if(urlsNumber < 2) {
        return R.identity([composeQuery({ type: 'entry', word: word })])
      } else {
        return R.times(
          i => composeQuery({ type: 'entry', word: `${word}_${i + 1}` }),
          urlsNumber
        )
      }
    })
    .catch(err => console.log(err));
}
