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
    ).toEqual(join([
      'example1 situation headword pronunciation definition synonym antonym',
      'example2 situation headword pronunciation definition synonym antonym'
    ]));
  });

  it('composes correct ankiCards from exampleGroups', () => {
    const senseData = {
      situation,
      pronunciation,
      definition,
      synonym,
      antonym,
      exampleGroups: [
        {
          form: 'form1',
          example: 'example1'
        },
        {
          form: 'form2',
          example: 'example2'
        }
      ]
    };

    expect(
      ankifySenseData(fakeMakeCard, {headword, pronunciation}, senseData)
    ).toEqual(join([
      'example1 situation form1 pronunciation definition synonym antonym',
      'example2 situation form2 pronunciation definition synonym antonym'
    ]));
  });

  it('composes correct ankiCards from examples and exampleGroups', () => {
    const senseData = {
      situation,
      pronunciation,
      definition,
      synonym,
      antonym,
      examples: ['example1', 'example2'],
      exampleGroups: [
        {
          form: 'form3',
          example: 'example3'
        },
        {
          form: 'form4',
          example: 'example4'
        }
      ]
    };

    expect(
      ankifySenseData(fakeMakeCard, {headword, pronunciation}, senseData)
    ).toEqual(join([
      'example1 situation headword pronunciation definition synonym antonym',
      'example2 situation headword pronunciation definition synonym antonym',
      'example3 situation form3 pronunciation definition synonym antonym',
      'example4 situation form4 pronunciation definition synonym antonym'
    ]));
  });
});
