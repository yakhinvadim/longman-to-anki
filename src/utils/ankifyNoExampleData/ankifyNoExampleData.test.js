import R from 'ramda';
import ankifyExampleData from './ankifyExampleData.js';

const definition = 'some definition';
const headword = 'some headword';

describe('ankifyExampleData', () => {
  it('composes correct card for example with form', () => {
    const situation = '';

    expect(
      ankifyExampleData({headword, definition, situation}, {
        text: 'example with text and form',
        form: 'some form'
      })
    ).toBe(R.join('', [
      `<span class="lta-example">example with text and form</span>`,
      `<br><br>`,
      `<span class="lta-form">some form</span>`,
      `#`,
      `<span class="lta-definition">some definition</span>`
    ]));
  });

  it('composes correct card for example without form', () => {
    const situation = '';

    expect(
      ankifyExampleData({headword, definition, situation}, {
        text: 'example with only text'
      })
    ).toBe(R.join('', [
      `<span class="lta-example">example with only text</span>`,
      `<br><br>`,
      `<span class="lta-headword">some headword</span>`,
      `#`,
      `<span class="lta-definition">some definition</span>`
    ]));
  });

  it('composes correct card for example with situation', () => {
    const situation = 'informal';

    expect(
      ankifyExampleData({headword, definition, situation}, {
        text: 'example with only text'
      })
    ).toBe(R.join('', [
      `<span class="lta-example">example with only text</span>`,
      `<br>`,
      `<span class="lta-situation">(informal)</span>`,
      `<br><br>`,
      `<span class="lta-headword">some headword</span>`,
      `#`,
      `<span class="lta-definition">some definition</span>`
    ]));
  });
});
