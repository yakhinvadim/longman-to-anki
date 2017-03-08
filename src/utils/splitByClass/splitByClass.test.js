import splitByClass from './splitByClass';

const markup = `<ul>
  <li class="fruit apple">Apple</li>
  <li class="fruit orange">Orange</li>s
  <li class="fruit pear">Pear</li>
</ul>`;

describe('splitByClass', () => {
  it('splits correctly if several elements with class are found', () => {
    expect(
      splitByClass('fruit', markup)
    ).toEqual(['Apple', 'Orange', 'Pear'])
  });

  it('splits correctly if only one element with class is found', () => {
    expect(
      splitByClass('orange', markup)
    ).toEqual(['Orange'])
  });
});
