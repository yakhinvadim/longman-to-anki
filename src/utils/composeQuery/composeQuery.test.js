import composeQuery from './composeQuery';

it('returns correct query for search type', () => {
  expect(
    composeQuery({ type: 'search', word: 'cool' })
  ).toEqual(
    'https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20html%20WHERE%20url%3D%22http%3A%2F%2Fwww.ldoceonline.com%2Fsearch%2F%3Fq%3Dcool%22'
  )
});

it('returns correct query for entry type', () => {
  expect(
    composeQuery({ type: 'entry', word: 'deliberately' })
  ).toEqual(
    'https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20html%20WHERE%20url%3D%22http%3A%2F%2Fwww.ldoceonline.com%2Fdictionary%2Fdeliberately%22'
  )
});

it('returns correct query when type is not set', () => {
  expect(
    composeQuery({ word: 'deliberately' })
  ).toEqual(
    'https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20html%20WHERE%20url%3D%22http%3A%2F%2Fwww.ldoceonline.com%2Fsearch%2F%3Fq%3Ddeliberately%22'
  )
});
