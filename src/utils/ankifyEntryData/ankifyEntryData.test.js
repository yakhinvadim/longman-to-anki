import ankifyEntryData from './ankifyEntryData.js';

const headword = 'headword';

const entryData = {
  senses: [
    {
      definition: 'first definition',
      examples: [
        {
          text: 'first example'
        }
      ]
    },
    {
      definition: 'second definition',
      examples: [
        {
          text: 'second example'
        }
      ]
    }
  ]
};

const ankiCards =
  'first example<br><br>headword#first definition' +
  '\n' +
  'second example<br><br>headword#second definition';

describe('ankifyEntryData', () => {
  it('composes correct ankiCards ', () => {
    expect(
      ankifyEntryData(headword, entryData)
    ).toBe(ankiCards);
  });
});
