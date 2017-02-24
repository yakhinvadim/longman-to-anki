import getWords from './getWords.js';

describe('getWords', () => {
  it('splits, removes spaces, drops empty values', () => {
    expect(
      getWords(' hello\n\n world')
    ).toEqual(['hello', 'world'])
  });
});
