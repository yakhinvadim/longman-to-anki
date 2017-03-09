import R from 'ramda';
import { ankifySenseData } from './ankifySenseData';

const join = R.join('\n');
const fakeMakeCard = ({ example, situation, form, pronunciation, definition, synonym, antonym }) =>
  `${example} ${situation} ${form} ${pronunciation} ${definition} ${synonym} ${antonym}`;

const headword = 'headword';
const pronunciation = 'pronunciation';
const definition = 'definition';
const situation = 'situation';
const synonym = 'synonym';
const antonym = 'antonym';

describe('ankifySenseData', () => {
  it('composes correct ankiCards from examples', () => {
    const senseData = {
      situation,
      pronunciation,
      definition,
      synonym,
      antonym,
      examples: ['example1', 'example2']
    };

    expect(
      ankifySenseData(fakeMakeCard, {headword, pronunciation}, senseData)
    ).toBe(join([
      'example1 situation headword pronunciation definition synonym antonym',
      'example2 situation headword pronunciation definition synonym antonym'
    ]));
  });
});
