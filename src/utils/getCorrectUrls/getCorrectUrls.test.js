import getCorrectUrls from './getCorrectUrls';

it('returns correct urls for one page word "deliberately"', () => {
  return getCorrectUrls("deliberately")
    .then(urls => expect(urls).toEqual([
      "https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20html%20WHERE%20url%3D%22http%3A%2F%2Fwww.ldoceonline.com%2Fdictionary%2Fdeliberately%22&diagnostics=true"
    ]))
});
