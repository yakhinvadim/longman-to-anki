import ankifySenseData from './ankifySenseData.js';

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
  'example1<br><br>headword#definition' +
  '\n' +
  'example2<br><br>headword#definition';

describe('ankifySenseData', () => {
  it('composes correct ankiCards ', () => {
    expect(
      ankifySenseData(headword, senseData)
    ).toBe(ankiCards);
  });
});
