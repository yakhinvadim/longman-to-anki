import splitByEntry from './splitByEntry.js';
import deliberately from './../../mocks/deliberately';
import set from './../../mocks/set';

describe('splitByEntry', () => {
  it('splits "deliberately" pageMarkup correctly', () => {
    expect(
      splitByEntry(deliberately.pageMarkup)
    ).toEqual(deliberately.entriesMarkup)
  });

  it('splits "set" pageMarkup correctly', () => {
    expect(
      splitByEntry(set.pageMarkup)
    ).toEqual(set.entriesMarkup)
  });
});
