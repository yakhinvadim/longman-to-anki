import composeWordData from './composeWordData';
import set from '../../mocks/set';

describe('composeWordData', () => {
  it('wordData contains headword', () => {
    expect(
      composeWordData(set.pageMarkup).headword
    ).toBeDefined();
  });

  it('wordData contains pronunciation', () => {
    expect(
      composeWordData(set.pageMarkup).pronunciation
    ).toBeDefined();
  });

  it('wordData contains entries', () => {
    expect(
      composeWordData(set.pageMarkup).entries
    ).toBeDefined();
  });
});
