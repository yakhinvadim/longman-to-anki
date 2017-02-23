import composeQuery from './composeQuery';

describe('composeQuery', () => {
  it('returns correct query for "set" word', () => {
    expect(
      composeQuery('set' )
    ).toEqual(
      'https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20html%20WHERE%20url%3D%22http%3A%2F%2Fwww.ldoceonline.com%2Fdictionary%2Fset%22'
    )
  });

  it('returns correct query for word with spaces inside', () => {
    expect(
      composeQuery('fire alarm')
    ).toEqual(
      'https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20html%20WHERE%20url%3D%22http%3A%2F%2Fwww.ldoceonline.com%2Fdictionary%2Ffire-alarm%22'
    )
  });
});
