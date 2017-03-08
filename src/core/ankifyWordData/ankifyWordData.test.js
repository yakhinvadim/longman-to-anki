import ankifyWordData from './ankifyWordData';

const ankifyEntryData = ({ankifySenseData, ankifyExampleData, headword}) => entryData => `${entryData} ${headword}`;
const ankifySenseData = () => {};
const ankifyExampleData = () => {};
const wordData = {
  headword: 'headword',
  entries: [
    'entry1',
    'entry2'
  ]
};

const ankiCards =
  'entry1 headword' +
  '\n' +
  'entry2 headword';

describe('ankifyWordData', () => {
  it('composes correct ankiCards ', () => {
    expect(
      ankifyWordData({ankifyEntryData, ankifySenseData, ankifyExampleData}, wordData)
    ).toBe(ankiCards);
  });
});
