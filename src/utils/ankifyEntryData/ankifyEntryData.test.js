import ankifyEntryData from './ankifyEntryData.js';

const ankifySenseData = ({ankifyExampleData, headword}) => senseData => `${headword}#${senseData.definition}`;
const ankifyExampleData = () => {};
const headword = 'headword';
const entryData = {
  senses: [
    {
      definition: 'first definition',
      examples: []
    },
    {
      definition: 'second definition',
      examples: []
    }
  ]
};

const ankiCards =
  'headword#first definition' +
  '\n' +
  'headword#second definition';

describe('ankifyEntryData', () => {
  it('composes correct ankiCards ', () => {
    expect(
      ankifyEntryData({ankifySenseData, ankifyExampleData, headword}, entryData)
    ).toBe(ankiCards);
  });
});
