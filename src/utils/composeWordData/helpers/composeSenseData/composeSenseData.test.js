import composeSenseData from './composeSenseData.js';
import deliberately from '../../mocks/deliberately';

describe('composeSenseData', () => {
  it('senseData contain definition', () => {
    expect(
      composeSenseData(deliberately.sensesMarkup[0]).definition
    ).toBeDefined();
  });

  it('senseData contain examples', () => {
    expect(
      composeSenseData(deliberately.sensesMarkup[0]).examples
    ).toBeDefined();
  });
});
