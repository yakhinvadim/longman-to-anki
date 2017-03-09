import composeExampleGroupData from './composeExampleGroupData';
import set from '../../mocks/set';

describe('composeExampleGroupData', () => {
  it('exampleGroupData contains form', () => {
    expect(
      composeExampleGroupData(set.pageMarkup).form
    ).toBeDefined();
  });

  it('exampleGroupData contains examples', () => {
    expect(
      composeExampleGroupData(set.pageMarkup).examples
    ).toBeDefined();
  });
});
