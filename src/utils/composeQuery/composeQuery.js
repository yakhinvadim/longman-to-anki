export default function composeQuery({ type, word }) {
  const queryStr = type === 'entry'
    ? 'dictionary/'
    : 'search/?q=';

  const dictionaryUrl = `http://www.ldoceonline.com/${queryStr}${word}`;

  const queryUrl = `https://query.yahooapis.com/v1/public/yql?q=${encodeURIComponent(
    `SELECT * FROM html WHERE url="${dictionaryUrl}"`
  )}`;

  return queryUrl;
}
