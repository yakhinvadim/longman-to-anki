import getSimpleExamples from './getSimpleExamples.js';
import deliberately from './../../mocks/deliberately';
import set from './../../mocks/set';
import R from 'ramda';

describe('getSimpleExamples', () => {
  it('gets correct examples for "deliberately" entry', () => {
    expect(
      R.map(getSimpleExamples, deliberately.sensesMarkup)
    ).toEqual([
      ['He deliberately upset her.'],
      ['He shook his head slowly and deliberately.']
    ])
  });

  it('gets correct examples for "set" entry', () => {
    expect(
      R.map(getSimpleExamples, set.sensesMarkup)
    ).toEqual([
      ['a chess set'],
      ['a colour television set'],
      [],
      [],
      ['Nadal won the second set 6–4.'],
      ['a favourite meeting place of the smart set',
        'Val got in with a wild set at college.'],
      [],
      ['Sasha performed a three-hour set.'],
      ['The set (x, y) has two members.'],
      [],
      ['onion sets']
    ])
  });
});
