import getPronunciation from './getPronunciation.js';
import set from '../../mocks/set';

describe('getPronunciation', () => {
  it('gets correct pronunciation for a "set" markup', () => {
    expect(
      getPronunciation(set.pageMarkup)
    ).toEqual('set')
  });
});
