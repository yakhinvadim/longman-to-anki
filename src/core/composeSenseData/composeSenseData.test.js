import composeSenseData from './composeSenseData';
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

  it('senseData contains usage', () => {
    expect(
      composeSenseData(set.sensesMarkup3[0]).situation
    ).toBeDefined();
  });
});
