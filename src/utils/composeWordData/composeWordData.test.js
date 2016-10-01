import composeWordData from './composeWordData.js';
import deliberately from './mocks/deliberately';
import set from './mocks/set';

describe('composeWordData', () => {
  it('gets correct wordData for "deliberately"', () => {
    expect(
      composeWordData(deliberately.pageMarkup)
    ).toEqual({
      word: 'deliberately',
      entries: [
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
      ]
    });
  });

  it('gets correct wordData for "set"', () => {
    expect(
      composeWordData(set.pageMarkup)
    ).toEqual({
      word: 'set',
      entries: [
        {
          senses: [
            {
              definition: 'to carefully put something down somewhere',
              examples: [
                {
                  text: 'She set the tray down on a table next to his bed.',
                  form: 'set something (down) on something'
                },
                {
                  text: 'Mark filled the pan and set it on the stove.',
                  form: 'set something (down) on something'
                },
                {
                  text: 'The workmen set the box down carefully on the floor.',
                  form: 'set something down/aside'
                },
                {
                  text: 'Remove the mushrooms and set them aside.',
                  form: 'set something down/aside'
                }
              ]
            },
            {
              definition: 'to put something into a surface',
              examples: [
                {
                  form: 'be set into something',
                  text: 'Gates should be hung on sturdy posts set well into the ground.'
                },
                {
                  form: 'be set into the wall/floor/ceiling etc',
                  text: 'an alarm button set into the wall beside the door'
                }
              ]
            },
            {
              definition: 'if a film, play, story etc is set in a particular place or period, the action takes place there or then',
              examples: [
                {
                  form: 'be set in something',
                  text: 'The novel is set in France.'
                },
                {
                  form: 'be set against something',
                  text: 'All this romance is set against a backdrop of rural Irish life.'
                }
              ]
            },
            {
              definition: 'to consider something in relation to other things',
              examples: [
                {
                  form: 'set something against/beside something',
                  text: 'These casualty totals have to be set against the continuing growth in traffic.'
                },
                {
                  text: 'This debate should be set in an international context.'
                }
              ]
            },
            {
              definition: 'to establish a way of doing something that is then copied or regarded as good',
              examples: [
                {
                  form: 'set the pattern/tone/trend etc (for something)',
                  text: 'Art and literature flourished and this set the pattern for the whole of Europe.'
                },
                {
                  form: 'set the pattern/tone/trend etc (for something)',
                  text: 'The prime minister’s fierce speech set the tone for the rest of the conference.'
                },
                {
                  text: 'It is important that parents set an example.'
                },
                {
                  text: 'The outcome of the case will set a legal precedent.'
                },
                {
                  text: 'His photographs set the standard for landscapes.'
                },
                {
                  text: 'Freud’s views on sexuality set the agenda for much of the century.'
                }
              ]
            },
            {
              definition: 'to make something start happening or to make someone start doing something',
              examples: [
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
              ]
            },
            {
              definition: 'to decide and state when something will happen, how much something should cost, what should be done etc',
              examples: [
                {
                  form: 'set a date/time (for something)',
                  text: 'The government has still not set a date for the election.'
                },
                {
                  text: 'International companies set the price of oil.'
                },
                {
                  form: 'set standards/limits/guidelines etc',
                  text: 'high standards of hygiene set by the Department of Health'
                }
              ]
            },
            {
              definition: 'to start doing something in a determined way, or to tell someone to start doing something',
              examples: [
                {
                  form: 'set to work to do something',
                  text: 'They set to work to paint the outside of the building.'
                },
                {
                  form: 'set (somebody) to work on something',
                  text: 'He’s about to set to work on a second book.'
                },
                {
                  form: 'set (somebody) to work doing something',
                  text: 'The boys were set to work collecting firewood.'
                },
                {
                  form: 'set somebody to do something',
                  text: 'Rocard set himself to reform public sector industry.'
                }
              ]
            },
            {
              definition: 'to move a switch on a machine, clock etc so that it will start or stop working at the time you want, or in the way you want',
              examples: [
                {
                  text: 'Did you set the alarm?'
                },
                {
                  text: 'I set the oven to come on at 12.'
                },
                {
                  form: 'set something to/at/on something',
                  text: 'Usually, the heating is set on ‘low’.'
                }
              ]
            },
            {
              definition: 'to become hard and solid',
              examples: [
                {
                  text: 'How long does it take for the glue to set?'
                }
              ]
            },
            {
              definition: 'when the sun sets, it moves down in the sky and disappears',
              examples: []
            },
            {
              definition: '',
              examples: []
            },
            {
              definition: '',
              examples: []
            },
            {
              definition: '',
              examples: []
            },
            {
              definition: '',
              examples: []
            },
            {
              definition: '',
              examples: []
            },
            {
              definition: '',
              examples: []
            },
            {
              definition: '',
              examples: []
            },
            {
              definition: 'if your face or mouth sets into a particular expression, you start to have an angry, sad, unfriendly etc expression',
              examples: [
                {
                  form: 'set into',
                  text: 'His mouth set into a rather grim line.'
                }
              ]
            },
            {
              definition: '',
              examples: []
            },
            {
              definition: '',
              examples: []
            },
            {
              definition: 'to give a student in your class a piece of work to do',
              examples: [
                {
                  form: 'set somebody something',
                  text: 'Mr Biggs has set us a 2,000-word essay.'
                }
              ]
            },
            {
              definition: 'to write the questions for an examination',
              examples: [
                {
                  text: 'The head teacher sets the questions for the English exam.'
                }
              ]
            },
            {
              definition: 'to arrange the words and letters of a book, newspaper etc so it is ready to be printed',
              examples: [
                {
                  text: 'In those days, books had to be set by hand.'
                }
              ]
            },
            {
              definition: 'to arrange someone’s hair while it is wet so that it has a particular style when it dries',
              examples: []
            },
          ]
        },
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
        },
        {
          "senses": [
            {
              definition: 'being in the position that is mentioned',
              examples: [
                {
                  form: 'set in/on/back etc',
                  text: 'a medieval village set high on a hill'
                },
                {
                  form: 'set in/on/back etc',
                  text: 'a big house set back from the road'
                }
              ]
            },
            {
              definition: 'used to say that something is in front of a particular background, especially in a way that is attractive',
              examples: [
                {
                  form: 'set against',
                  text: 'a small town of white buildings, set against a background of hills'
                },
                {
                  form: 'set against',
                  text: 'pink petals set against dark green foliage'
                }
              ]
            },
            {
              definition: 'a set amount, time etc is fixed and is never changed',
              examples: [
                {
                  text: 'We were paid a set amount each week.'
                },
                {
                  text: 'The evening meal is served at a set time.'
                },
                {
                  text: 'Small children like a set routine.'
                }
              ]
            },
            {
              definition: 'someone who is set for something is ready for it',
              examples: [
                {
                  form: 'set for',
                  text: 'Are you all set for the trip?'
                },
                {
                  form: 'set to do something',
                  text: 'I was just set to go when the phone rang.'
                },
                {
                  text: 'Get set for a night of excitement.'
                },
                {
                  text: 'On your marks, get set, go.'
                }
              ]
            },
            {
              definition: '',
              examples: []
            },
            {
              definition: 'not likely to change',
              examples: [
                {
                  text: 'People had very set ideas about how to bring up children.'
                },
                {
                  text: 'Mark was 65 and rather set in his ways.'
                },
              ]
            },
            {
              definition: '',
              examples: []
            },
            {
              definition: '',
              examples: []
            },
            {
              definition: '',
              examples: []
            },
            {
              definition: '',
              examples: []
            },
            {
              definition: 'a set meal in a restaurant has a fixed price and a more limited choice than usual',
              examples: [
                {
                  form: 'set lunch/dinner/menu',
                  text: 'The hotel does a very good set menu.'
                }
              ]
            },
            {
              definition: '',
              examples: []
            },
            {
              definition: 'if your face is set, it has a fixed expression on it, especially one that is angry, worried etc',
              examples: [
                {
                  text: 'He stared at her, his face set.'
                },
                {
                  text: 'Kate’s face was set in a grim expression.'
                },
                {
                  form: 'set smile/teeth/jaw',
                  text: '‘Damn you, ’ he said through set teeth.'
                }
              ]
            }
          ]
        }
      ]
    });
  });
});
