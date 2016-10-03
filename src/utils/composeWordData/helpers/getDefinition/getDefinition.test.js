import getDefinition from './getDefinition.js';
import set from './../../mocks/set';

describe('getDefinition', () => {
  it('gets correct definition for normal sense', () => {
    expect(
      getDefinition(set.sensesMarkup2[0])
    ).toEqual('a group of similar things that belong together or are related in some way')
  });

  it('gets correct definitions for crossref sense', () => {
    expect(
      getDefinition(set.sensesMarkup2[6])
    ).toEqual('')
  });

  xit('gets correct definitions for sense with subsenses', () => {
    expect(
      getDefinition(set.sensesMarkup1[1])
    ).toEqual('if a doctor sets a broken bone, he or she moves it into position so that the bone can grow together again\nOR\nif a broken bone sets, it joins together again')
  });
});
