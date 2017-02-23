import R from 'ramda';

const spacesToHyphens = R.replace(/ /g, '-');

export default function composeQuery(word) {
  const escapedWord = spacesToHyphens(word);

  const dictionaryUrl = `http://www.ldoceonline.com/dictionary/${escapedWord}`;

  const queryUrl = `https://query.yahooapis.com/v1/public/yql?q=${encodeURIComponent(
    `SELECT * FROM html WHERE url="${dictionaryUrl}"`
  )}`;

  return queryUrl;
}
