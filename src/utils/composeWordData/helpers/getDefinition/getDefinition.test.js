import getDefinition from './getDefinition.js';
import deliberately from './../../mocks/deliberately';

describe('getDefinition', () => {
  it('gets correct definition for the first "deliberately" sense', () => {
    expect(
      getDefinition(deliberately.sensesMarkup[0])
    ).toEqual('done in a way that is intended or planned')
  });

  it('gets correct definition for the second "deliberately" sense', () => {
    expect(
      getDefinition(deliberately.sensesMarkup[1])
    ).toEqual('done or said in a slow careful way')
  });
});
