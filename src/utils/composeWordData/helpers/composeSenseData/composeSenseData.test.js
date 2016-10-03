import composeSenseData from './composeSenseData.js';
import set from '../../mocks/set';

describe('composeSenseData', () => {
  it('senseData contains definition', () => {
    expect(
      composeSenseData(set.sensesMarkup2[0]).definition
    ).toBeDefined();
  });

  it('senseData contains examples', () => {
    expect(
      composeSenseData(set.sensesMarkup2[0]).examples
    ).toBeDefined();
  });
});
