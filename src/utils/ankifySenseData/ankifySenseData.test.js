import ankifySenseData from './ankifySenseData.js';

const ankifyExampleData = (headword, definition, situation) => example => example.text;
const headword = 'headword';
const senseData = {
  definition: 'definition',
  situation: '',
  examples: [
    {
      text: 'example1'
    },
    {
      text: 'example2',
    }
  ]
};

const ankiCards =
  'example1' +
  '\n' +
  'example2';

describe('ankifySenseData', () => {
  it('composes correct ankiCards ', () => {
    expect(
      ankifySenseData(ankifyExampleData, headword, senseData)
    ).toBe(ankiCards);
  });
});
