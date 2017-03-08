import splitBySelector from './splitBySelector';

const markup = `<ul>
  <li class="fruit apple">Apple</li>
  <li class="fruit orange">Orange</li>s
  <li class="fruit pear">Pear</li>
</ul>`;

describe('splitBySelector', () => {
  it('splits correctly if several elements with class are found', () => {
    expect(
      splitBySelector('.fruit', markup)
    ).toEqual(['Apple', 'Orange', 'Pear'])
  });

  it('splits correctly if only one element with class is found', () => {
    expect(
      splitBySelector('.orange', markup)
    ).toEqual(['Orange'])
  });
});
