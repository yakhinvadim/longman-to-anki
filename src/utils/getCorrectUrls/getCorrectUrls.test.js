import getCorrectUrls from './getCorrectUrls';

it('returns correct urls for 1 page word "deliberately"', () => {
  return getCorrectUrls("deliberately")
    .then(urls => expect(urls).toEqual([
      "https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20html%20WHERE%20url%3D%22http%3A%2F%2Fwww.ldoceonline.com%2Fdictionary%2Fdeliberately%22&diagnostics=true"
    ]))
});

it('returns correct urls for 2 pages word "crank"', () => {
  return getCorrectUrls("crank")
    .then(urls => expect(urls).toEqual([
      "https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20html%20WHERE%20url%3D%22http%3A%2F%2Fwww.ldoceonline.com%2Fdictionary%2Fcrank_1%22&diagnostics=true",
      "https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20html%20WHERE%20url%3D%22http%3A%2F%2Fwww.ldoceonline.com%2Fdictionary%2Fcrank_2%22&diagnostics=true"
    ]))
});

it('returns correct urls for 3 pages word "front"', () => {
  return getCorrectUrls("front")
    .then(urls => expect(urls).toEqual([
      "https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20html%20WHERE%20url%3D%22http%3A%2F%2Fwww.ldoceonline.com%2Fdictionary%2Ffront_1%22&diagnostics=true",
      "https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20html%20WHERE%20url%3D%22http%3A%2F%2Fwww.ldoceonline.com%2Fdictionary%2Ffront_2%22&diagnostics=true",
      "https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20html%20WHERE%20url%3D%22http%3A%2F%2Fwww.ldoceonline.com%2Fdictionary%2Ffront_3%22&diagnostics=true"
    ]))
});

it('returns correct urls for 4 pages word "cool"', () => {
  return getCorrectUrls("cool")
    .then(urls => expect(urls).toEqual([
      "https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20html%20WHERE%20url%3D%22http%3A%2F%2Fwww.ldoceonline.com%2Fdictionary%2Fcool_1%22&diagnostics=true",
      "https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20html%20WHERE%20url%3D%22http%3A%2F%2Fwww.ldoceonline.com%2Fdictionary%2Fcool_2%22&diagnostics=true",
      "https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20html%20WHERE%20url%3D%22http%3A%2F%2Fwww.ldoceonline.com%2Fdictionary%2Fcool_3%22&diagnostics=true",
      "https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20html%20WHERE%20url%3D%22http%3A%2F%2Fwww.ldoceonline.com%2Fdictionary%2Fcool_4%22&diagnostics=true"
    ]))
});
