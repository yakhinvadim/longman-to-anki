import composeSenseData from './composeSenseData.js';
import set from '../../mocks/set';

describe('composeSenseData', () => {
  it('senseData contain definition', () => {
    expect(
      composeSenseData(set.sensesMarkup2[0]).definition
    ).toBeDefined();
  });

  it('senseData contain examples', () => {
    expect(
      composeSenseData(set.sensesMarkup2[0]).examples
    ).toBeDefined();
  });
});
