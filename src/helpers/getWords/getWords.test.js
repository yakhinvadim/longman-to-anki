import getWords from './getWords';

describe('getWords', () => {
  it('splits, removes spaces, drops empty values', () => {
    expect(
      getWords(' hello\n\n world')
    ).toEqual(['hello', 'world'])
  });
});
