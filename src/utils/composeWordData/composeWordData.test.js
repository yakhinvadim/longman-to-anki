import composeWordData from './composeWordData.js';
import deliberately from './mocks/deliberately';

describe('composeWordData', () => {
  it('gets correct wordData for "deliberately" entry', () => {
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
});
