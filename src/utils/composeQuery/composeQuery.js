export default function composeQuery({ type, word }) {
  const queryStr = type === 'search'
    ? 'search/?q=' : type === 'entry'
    ? 'dictionary/'
    : 'dictionary/';

  return `https://query.yahooapis.com/v1/public/yql?q=${encodeURIComponent(
    `SELECT * FROM html WHERE url="http://www.ldoceonline.com/${queryStr}${word}"`
  )}`;
}
