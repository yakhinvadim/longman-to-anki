import ankifyExample from './ankifyExample.js';

const definition = 'some definition';
const headword = 'some headword';

describe('ankifyExample', () => {
  it('composes correct card for example with form', () => {
    expect(
      ankifyExample(headword, definition, {
        text: 'example with text and form',
        form: 'some form'
      })
    ).toBe('example with text and form<br><br>some form#some definition');
  });

  it('composes correct card for example without form', () => {
    expect(
      ankifyExample(headword, definition, {
        text: 'example with only text'
      })
    ).toBe('example with only text<br><br>some headword#some definition');
  });
});
