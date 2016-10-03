import composeExamplesData from './composeExamplesData.js';
import set from './../../mocks/set';

describe('composeExamplesData', () => {

  it('composes correct examplesData for sense with one simple example', () => {
    expect(
      composeExamplesData(set.sensesMarkup2[1])
    ).toEqual([
      {
        text: 'a colour television set'
      }
    ])
  });

  it('composes correct examplesData for sense with one grammar example', () => {
    expect(
      composeExamplesData(set.sensesMarkup2[2])
    ).toEqual([
      {
        text: 'Cruise met Kidman on the set of ‘Days of Thunder’.',
        form: 'on set/on the set'
      }
    ])
  });

  it('composes correct examplesData for sense with one collocation example', () => {
    expect(
      composeExamplesData(set.sensesMarkup2[9])
    ).toEqual([
      {
        text: 'Adam’s in the top set for maths.',
        form: 'top/bottom etc set'
      }
    ])
  });

  it('composes correct examplesData for sense with no examples', () => {
    expect(
      composeExamplesData(set.sensesMarkup2[3])
    ).toEqual([])
  });

  it('composes correct examplesData for sense with glossary in example', () => {
    expect(
      composeExamplesData(set.sensesMarkup2[5])
    ).toEqual([
      {
        text: 'a favourite meeting place of the smart set'
      },
      {
        text: 'Val got in with a wild set at college.'
      }
    ])
  });

  it('composes correct examplesData for crossreference sense', () => {
    expect(
      composeExamplesData(set.sensesMarkup2[6])
    ).toEqual([])
  });

  xit('composes correct examplesData for sense with linkword in grammar/collocation', () => {
    expect(
      composeExamplesData(set.sensesMarkup1[0])
    ).toEqual([
      {
        form: 'set something in motion/progress/train',
        text: 'A study by military experts was immediately set in motion.'
      },
      {
        form: 'set something in motion/progress/train',
        text: 'The chief executive will set in train the process of finding a successor.'
      },
      {
        form: 'set something on fire/alight/ablaze (also set fire to something)',
        text: 'Protesters set fire to two buses.'
      },
      {
        form: 'set somebody/something doing something',
        text: 'Her last remark has set me thinking.'
      },
      {
        form: 'set somebody/something doing something',
        text: 'The wind set the trees rustling.'
      }
    ])
  });
});
