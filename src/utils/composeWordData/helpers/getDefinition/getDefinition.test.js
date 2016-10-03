import getDefinition from './getDefinition.js';
import deliberately from './../../mocks/deliberately';
import set from './../../mocks/set';
import R from 'ramda';

describe('getDefinition', () => {
  it('gets correct definitions for "deliberately" entry', () => {
    expect(
      R.map(getDefinition, deliberately.sensesMarkup)
    ).toEqual([
      'done in a way that is intended or planned',
      'done or said in a slow careful way'
    ])
  });

  it('gets correct definitions for "set" second entry', () => {
    expect(
      R.map(getDefinition, set.sensesMarkup2)
    ).toEqual([
      'a group of similar things that belong together or are related in some way',
      'a television, or a piece of equipment for receiving radio signals',
      'a place where a film or television programme is filmed',
      'the scenery, furniture etc used on a stage in a play or in the place where a film or television show is being made',
      'one part of a game such as tennis or volleyball',
      'a group of people who are similar in some way and spend time together socially',
      '',
      'a performance by a singer, band, or disc jockey',
      'a group of numbers, shapes etc in mathematics',
      'a group of children who are taught a particular school subject together because they have the same level of ability in that subject',
      'a small onion that you plant in order to grow bigger ones'
    ])
  });
});
