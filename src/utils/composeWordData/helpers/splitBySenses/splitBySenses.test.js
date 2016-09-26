import splitBySenses from './splitBySenses.js';
import deliberately from './../../mocks/deliberately';
import set from './../../mocks/set';

describe('splitBySenses', () => {
  it('splits "deliberately" entryMarkup correctly', () => {
    expect(
      splitBySenses(deliberately.entriesMarkup[0])
    ).toEqual(deliberately.sensesMarkup)
  });

  it('splits "set" first entryMarkup by correct number of senses', () => {
    expect(
      splitBySenses(set.entriesMarkup[0]).length
    ).toEqual(25)
  });

  it('splits "set" second entryMarkup correctly', () => {
    expect(
      splitBySenses(set.entriesMarkup[1])
    ).toEqual(set.sensesMarkup)
  });
});
