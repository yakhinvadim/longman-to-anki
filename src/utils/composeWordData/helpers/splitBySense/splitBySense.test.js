import splitBySense from './splitBySense.js';
import deliberately from './../../mocks/deliberately';
import set from './../../mocks/set';

describe('splitBySense', () => {
  it('splits "deliberately" entryMarkup correctly', () => {
    expect(
      splitBySense(deliberately.entriesMarkup[0])
    ).toEqual(deliberately.sensesMarkup)
  });

  it('splits "set" first entryMarkup by correct number of senses', () => {
    expect(
      splitBySense(set.entriesMarkup[0]).length
    ).toEqual(25)
  });

  it('splits "set" second entryMarkup correctly', () => {
    expect(
      splitBySense(set.entriesMarkup[1])
    ).toEqual(set.sensesMarkup)
  });
});
