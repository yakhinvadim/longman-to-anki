import ankifyExampleData from './ankifyExampleData.js';

const definition = 'some definition';
const headword = 'some headword';

describe('ankifyExampleData', () => {
  it('composes correct card for example with form', () => {
    const situation = '';

    expect(
      ankifyExampleData(headword, definition, situation, {
        text: 'example with text and form',
        form: 'some form'
      })
    ).toBe('example with text and form<br><br>some form#some definition');
  });

  it('composes correct card for example without form', () => {
    const situation = '';

    expect(
      ankifyExampleData(headword, definition, situation, {
        text: 'example with only text'
      })
    ).toBe('example with only text<br><br>some headword#some definition');
  });

  it('composes correct card for example with situation', () => {
    const situation = 'informal';

    expect(
      ankifyExampleData(headword, definition, situation, {
        text: 'example with only text'
      })
    ).toBe('example with only text<br>(informal)<br><br>some headword#some definition');
  });
});
