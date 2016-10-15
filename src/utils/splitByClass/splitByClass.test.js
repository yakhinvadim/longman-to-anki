import splitByClass from './splitByClass.js';
import set from '../../mocks/set';

describe('splitByClass for .Entry', () => {
  it('splits "set" pageMarkup correctly', () => {
    expect(
      splitByClass('.Entry', set.pageMarkup)
    ).toEqual(set.entriesMarkup)
  });
});

describe('splitByClass for .Sense', () => {
  it('splits "set" second entryMarkup correctly', () => {
    expect(
      splitByClass('.Sense', set.entriesMarkup[1])
    ).toEqual(set.sensesMarkup2)
  });
});
