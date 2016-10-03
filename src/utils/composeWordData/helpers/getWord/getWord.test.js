import getWord from './getWord.js';
import set from './../../mocks/set';

describe('getWord', () => {
  it('gets correct word for "set" markup', () => {
    expect(
      getWord(set.pageMarkup)
    ).toEqual('set')
  });
});
