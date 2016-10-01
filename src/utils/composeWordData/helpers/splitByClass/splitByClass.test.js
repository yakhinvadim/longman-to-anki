import splitByClass from './splitByClass.js';
import deliberately from './../../mocks/deliberately';
import set from './../../mocks/set';

describe('splitByClass form .Entry', () => {
  it('splits "deliberately" pageMarkup correctly', () => {
    expect(
      splitByClass('.Entry', deliberately.pageMarkup)
    ).toEqual(deliberately.entriesMarkup)
  });

  it('splits "set" pageMarkup correctly', () => {
    expect(
      splitByClass('.Entry', set.pageMarkup)
    ).toEqual(set.entriesMarkup)
  });
});

describe('splitByClass for .Sense', () => {
  it('splits "deliberately" entryMarkup correctly', () => {
    expect(
      splitByClass('.Sense', deliberately.entriesMarkup[0])
    ).toEqual(deliberately.sensesMarkup)
  });

  it('splits "set" first entryMarkup by correct number of senses', () => {
    expect(
      splitByClass('.Sense', set.entriesMarkup[0]).length
    ).toEqual(25)
  });

  it('splits "set" second entryMarkup correctly', () => {
    expect(
      splitByClass('.Sense', set.entriesMarkup[1])
    ).toEqual(set.sensesMarkup)
  });
});
