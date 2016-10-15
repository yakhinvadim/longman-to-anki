import ankifyWordData from './ankifyWordData.js';

const wordData = {
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

describe('ankifyWordData', () => {
  it('composes correct ankiCards ', () => {
    expect(
      ankifyWordData(wordData)
    ).toBe(ankiCards);
  });
});
