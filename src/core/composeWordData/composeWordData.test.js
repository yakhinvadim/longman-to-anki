import composeWordData from './composeWordData';
import set from '../../mocks/set';

describe('composeWordData', () => {
  it('wordData contains word', () => {
    expect(
      composeWordData(set.pageMarkup).headword
    ).toBeDefined();
  });

  it('senseData contains entries', () => {
    expect(
      composeWordData(set.pageMarkup).entries
    ).toBeDefined();
  });
});
