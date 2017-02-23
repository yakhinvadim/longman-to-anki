import ankifyEntryData from './ankifyEntryData.js';

const ankifySenseData = ({ankifyExampleData, headword}) => senseData => `${senseData} ${headword}`;
const ankifyExampleData = () => {};
const headword = 'headword';
const entryData = {
  senses: [
    'sense1',
    'sense2'
  ]
};

const ankiCards =
  'sense1 headword' +
  '\n' +
  'sense2 headword';

describe('ankifyEntryData', () => {
  it('composes correct ankiCards ', () => {
    expect(
      ankifyEntryData({ankifySenseData, ankifyExampleData, headword}, entryData)
    ).toBe(ankiCards);
  });
});
