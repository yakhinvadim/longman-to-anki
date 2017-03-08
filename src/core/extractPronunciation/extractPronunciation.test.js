import extractPronunciation from './extractPronunciation';
import set from '../../mocks/set';

describe('extractPronunciation', () => {
  it('gets correct pronunciation for a "set" markup', () => {
    expect(
      extractPronunciation(set.pageMarkup)
    ).toEqual('set')
  });
});
