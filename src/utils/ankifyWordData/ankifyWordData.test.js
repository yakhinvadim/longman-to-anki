import ankifyWordData from './ankifyWordData.js';

const ankifyEntryData = irrelevantArgs => entryData => entryData.senses.length;
const wordData = {
  headword: 'headword',
  entries: [
    {
      senses: [
        {},
        {}
      ]
    },
    {
      senses: [
        {}
      ]
    }
  ]
};

const ankiCards =
  '2' +
  '\n' +
  '1';

describe('ankifyWordData', () => {
  it('composes correct ankiCards ', () => {
    expect(
      ankifyWordData({ ankifyEntryData }, wordData)
    ).toBe(ankiCards);
  });
});
