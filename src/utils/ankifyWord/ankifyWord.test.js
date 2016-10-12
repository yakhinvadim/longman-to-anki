import ankifyWord from './ankifyWord.js';

const word = {
  headword: 'headword',
  entries: [
    {
      senses: [
        {
          definition: 'first definition',
          examples: [
            {
              text: 'first example'
            }
          ]
        }
      ]
    },
    {
      senses: [
        {
          definition: 'second definition',
          examples: [
            {
              text: 'second example'
            }
          ]
        }
      ]
    }
  ]
};

const ankiCards =
  'first example<br><br>headword#first definition' +
  '\n' +
  'second example<br><br>headword#second definition';

describe('ankifyWord', () => {
  it('composes correct ankiCards ', () => {
    expect(
      ankifyWord(word)
    ).toBe(ankiCards);
  });
});
