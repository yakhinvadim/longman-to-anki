import composeExampleGroupData from './composeExampleGroupData';
import set from '../../mocks/set';

describe('composeExampleGroupData', () => {
  it('exampleGroupData contains headword', () => {
    expect(
      composeExampleGroupData(set.pageMarkup).form
    ).toBeDefined();
  });

  it('exampleGroupData contains pronunciation', () => {
    expect(
      composeExampleGroupData(set.pageMarkup).examples
    ).toBeDefined();
  });
});
