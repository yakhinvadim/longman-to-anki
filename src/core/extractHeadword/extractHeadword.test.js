import extractHeadword from './extractHeadword';
import set from '../../mocks/set';

describe('extractHeadword', () => {
  it('gets correct word for a "set" markup', () => {
    expect(
      extractHeadword(set.pageMarkup)
    ).toEqual('set')
  });
});
