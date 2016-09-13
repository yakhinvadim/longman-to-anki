export default function composeQuery({ type, word }) {
  const queryStr = type === 'entry'
    ? 'dictionary/' : type === 'search'
    ? 'search/?q='
    : 'search/?q=';

  return `https://query.yahooapis.com/v1/public/yql?q=${encodeURIComponent(
    `SELECT * FROM html WHERE url="http://www.ldoceonline.com/${queryStr}${word}"`
  )}`;
}
