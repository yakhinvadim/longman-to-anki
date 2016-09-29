import getExamples from './getExamples.js';
import deliberately from './../../mocks/deliberately';
import set from './../../mocks/set';
import R from 'ramda';

describe('getExamples', () => {
  it('gets correct examples for "deliberately" entry', () => {
    expect(
      R.map(getExamples, deliberately.sensesMarkup)
    ).toEqual([
      [{ text: 'He deliberately upset her.' }],
      [{ text: 'He shook his head slowly and deliberately.' }]
    ])
  });

  it('gets correct examples for "set" entry', () => {
    expect(
      R.map(getExamples, set.sensesMarkup)
    ).toEqual([
      [
        {
          text: 'a set of tools',
          form: 'set of'
        },
        {
          text: 'We face a new set of problems.',
          form: 'set of'
        },
        {
          text: 'The older generation have a different set of values.',
          form: 'set of'
        },
        {
          text: 'a chess set'
        }
      ],
      [
        {
          text: 'a colour television set'
        }
      ],
      [
        {
          text: 'Cruise met Kidman on the set of ‘Days of Thunder’.',
          form: 'on set/on the set'
        }
      ],
      [],
      [
        {
          text: 'Nadal won the second set 6–4.'
        }
      ],
      [
        {
          text: 'a favourite meeting place of the smart set'
        },
        {
          text: 'Val got in with a wild set at college.'
        }
      ],
      [],
      [
        {
          text: 'Sasha performed a three-hour set.'
        }
      ],
      [
        {
          text: 'The set (x, y) has two members.'
        }
      ],
      [
        {
          text: 'Adam’s in the top set for maths.',
          form: 'top/bottom etc set'
        }
      ],
      [
        {
          text: 'onion sets'
        }
      ]
    ])
  });
});
