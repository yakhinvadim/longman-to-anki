import R from 'ramda';
import { ankifySenseData } from './ankifySenseData';

const join = R.join('\n');
const fakeMakeCard = ({ example = '', situation = '', form = '', pronunciation = '', definition = '', synonym = '', antonym = '' } = {}) =>
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
      definition,
      synonym,
      antonym,
      examples: ['example1', 'example2'],
      exampleGroups: [],
      subsenses: []
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
      definition,
      synonym,
      antonym,
      exampleGroups: [
        {
          form: 'form1',
          examples: ['example11', 'example12']
        },
        {
          form: 'form2',
          examples: ['example2']
        }
      ],
      subsenses: []
    };

    expect(
      ankifySenseData(fakeMakeCard, {headword, pronunciation}, senseData)
    ).toEqual(join([
      'example11 situation form1 pronunciation definition synonym antonym',
      'example12 situation form1 pronunciation definition synonym antonym',
      'example2 situation form2 pronunciation definition synonym antonym'
    ]));
  });

  it('composes correct ankiCards from examples and exampleGroups', () => {
    const senseData = {
      situation,
      definition,
      synonym,
      antonym,
      examples: ['example1', 'example2'],
      exampleGroups: [
        {
          form: 'form3',
          examples: ['example31', 'example32']
        },
        {
          form: 'form4',
          examples: ['example4']
        }
      ],
      subsenses: []
    };

    expect(
      ankifySenseData(fakeMakeCard, {headword, pronunciation}, senseData)
    ).toEqual(join([
      'example1 situation headword pronunciation definition synonym antonym',
      'example2 situation headword pronunciation definition synonym antonym',
      'example31 situation form3 pronunciation definition synonym antonym',
      'example32 situation form3 pronunciation definition synonym antonym',
      'example4 situation form4 pronunciation definition synonym antonym'
    ]));
  });

  it('composes correct ankiCards if there are no examples, exampleGroups and subsenses', () => {
    const senseData = {
      situation,
      definition,
      synonym,
      antonym,
      examples: [],
      exampleGroups: [],
      subsenses: []
    };

    expect(
      ankifySenseData(fakeMakeCard, {headword, pronunciation}, senseData)
    ).toEqual(
      ' situation headword pronunciation definition synonym antonym'
    );
  });
});
