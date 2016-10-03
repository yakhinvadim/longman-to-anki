export default function composeQuery(word) {
  const dictionaryUrl = `http://www.ldoceonline.com/dictionary/${word}`;

  const queryUrl = `https://query.yahooapis.com/v1/public/yql?q=${encodeURIComponent(
    `SELECT * FROM html WHERE url="${dictionaryUrl}"`
  )}`;

  return queryUrl;
}
