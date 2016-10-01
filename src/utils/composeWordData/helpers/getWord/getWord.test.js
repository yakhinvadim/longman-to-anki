import getWord from './getWord.js';
import deliberately from './../../mocks/deliberately';
import set from './../../mocks/set';

describe('getWord', () => {
  it('gets correct definitions for "deliberately" entry', () => {
    expect(
      getWord(deliberately.pageMarkup)
    ).toEqual('deliberately')
  });

  it('gets correct definitions for "set" second entry', () => {
    expect(
      getWord(set.pageMarkup)
    ).toEqual('set')
  });
});
