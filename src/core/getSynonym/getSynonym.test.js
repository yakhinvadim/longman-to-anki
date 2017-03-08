import getSynonym from './getSynonym';
import set from '../../mocks/set';

describe('getSynonym', () => {
  it('gets correct synonym for sense with one synonym', () => {
    expect(
      getSynonym(set.sensesMarkup2[9])
    ).toEqual('stream')
  });

  it('gets correct synonym for sense without synonym', () => {
    expect(
      getSynonym(set.sensesMarkup2[8])
    ).toEqual('')
  });
});
