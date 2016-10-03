import getHeadword from './getHeadword.js';
import set from './../../mocks/set';

describe('getHeadword', () => {
  it('gets correct word for a "set" markup', () => {
    expect(
      getHeadword(set.pageMarkup)
    ).toEqual('set')
  });
});
