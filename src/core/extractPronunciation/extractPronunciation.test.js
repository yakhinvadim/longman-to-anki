import extractPronunciation from './extractPronunciation';
import set from '../../mocks/set';
import go from '../../mocks/go';
import mouse from '../../mocks/mouse';

describe('extractPronunciation', () => {
  it('extracts correct pronunciation for ordinary word', () => {
    expect(
      extractPronunciation(set.pageMarkup)
    ).toEqual('set')
  });

  it('extracts correct pronunciation for irregular verb', () => {
    expect(
      extractPronunciation(go.pageMarkup)
    ).toEqual('ɡəʊ $ ɡoʊ')
  });

  it('extracts correct pronunciation for irregular plural noun', () => {
    expect(
      extractPronunciation(mouse.pageMarkup)
    ).toEqual('maʊs')
  });
});
