import ankifyEntry from './ankifyEntry.js';

const headword = 'headword';

const entry = {
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

describe('ankifyEntry', () => {
  it('composes correct ankiCards ', () => {
    expect(
      ankifyEntry(headword, entry)
    ).toBe(ankiCards);
  });
});
