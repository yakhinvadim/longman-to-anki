import splitByEntries from './splitByEntries.js';
import deliberately from './../../mocks/deliberately';
import set from './../../mocks/set';

describe('splitByEntries', () => {
  it('splits "deliberately" pageMarkup correctly', () => {
    expect(
      splitByEntries(deliberately.pageMarkup)
    ).toEqual(deliberately.entriesMarkup)
  });

  it('splits "set" pageMarkup correctly', () => {
    expect(
      splitByEntries(set.pageMarkup)
    ).toEqual(set.entriesMarkup)
  });
});
