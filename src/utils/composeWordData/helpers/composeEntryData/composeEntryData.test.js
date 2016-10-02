import composeEntryData from './composeEntryData.js';
import deliberately from '../../mocks/deliberately';
import set from '../../mocks/set';
import R from 'ramda';

describe('composeEntryData', () => {
  it('gets correct entryData for "deliberately" entry', () => {
    expect(
      R.map(composeEntryData, deliberately.entriesMarkup)
    ).toEqual([
      {
        senses: [
          {
            definition: 'done in a way that is intended or planned',
            examples: [
              {
                text: 'He deliberately upset her.'
              }
            ]
          },
          {
            definition: 'done or said in a slow careful way',
            examples: [
              {
                text: 'He shook his head slowly and deliberately.'
              }
            ]
          }
        ]
      }
    ])
  });

  it('gets correct entryData for second "set" entry', () => {
    expect(
      composeEntryData(set.entriesMarkup[1])
    ).toEqual(
      {
        "senses": [
          {
            definition: 'a group of similar things that belong together or are related in some way',
            examples: [
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
            ]
          },
          {
            definition: 'a television, or a piece of equipment for receiving radio signals',
            examples: [
              {
                text: 'a colour television set'
              }
            ]
          },
          {
            definition: 'a place where a film or television programme is filmed',
            examples: [
              {
                text: 'Cruise met Kidman on the set of ‘Days of Thunder’.',
                form: 'on set/on the set'
              }
            ]
          },
          {
            definition: 'the scenery, furniture etc used on a stage in a play or in the place where a film or television show is being made',
            examples: []
          },
          {
            definition: 'one part of a game such as tennis or volleyball',
            examples: [
              {
                text: 'Nadal won the second set 6–4.'
              }
            ]
          },
          {
            definition: 'a group of people who are similar in some way and spend time together socially',
            examples: [
              {
                text: 'a favourite meeting place of the smart set'
              },
              {
                text: 'Val got in with a wild set at college.'
              }
            ]
          },
          {
            definition: '',
            examples: []
          },
          {
            definition: 'a performance by a singer, band, or disc jockey',
            examples: [
              {
                text: 'Sasha performed a three-hour set.'
              }
            ]
          },
          {
            definition: 'a group of numbers, shapes etc in mathematics',
            examples: [
              {
                text: 'The set (x, y) has two members.'
              }
            ]
          },
          {
            definition: 'a group of children who are taught a particular school subject together because they have the same level of ability in that subject',
            examples: [
              {
                text: 'Adam’s in the top set for maths.',
                form: 'top/bottom etc set'
              }
            ]
          },
          {
            definition: 'a small onion that you plant in order to grow bigger ones',
            examples: [
              {
                text: 'onion sets'
              }
            ]
          }
        ]
      }
    )
  });
});
