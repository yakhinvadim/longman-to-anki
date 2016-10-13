import ankifySense from './ankifySense.js';

const headword = 'headword';

const sense = {
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

describe('ankifySense', () => {
  it('composes correct ankiCards ', () => {
    expect(
      ankifySense(headword, sense)
    ).toBe(ankiCards);
  });
});
