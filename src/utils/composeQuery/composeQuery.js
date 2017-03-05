import R from 'ramda';

const someSymbolsToHyphens = R.replace(/[\/ ’]/g, '-');
const someSymbolsDelete = R.replace(/[(!?.)]/g, '');
const fixDoubleSpaces = R.replace(/ {2}/g, ' ');

export default function composeQuery(word) {
  const escapedWord = R.pipe(
    someSymbolsDelete,
    someSymbolsToHyphens,
    fixDoubleSpaces,
    word => word.toLowerCase()
  )(word);

  const dictionaryUrl = `http://www.ldoceonline.com/dictionary/${escapedWord}`;

  const queryUrl = `https://query.yahooapis.com/v1/public/yql?q=${encodeURIComponent(
    `SELECT * FROM html WHERE url="${dictionaryUrl}"`
  )}`;

  return queryUrl;
}
