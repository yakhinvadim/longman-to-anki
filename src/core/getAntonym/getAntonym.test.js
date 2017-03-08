import getAntonym from './getAntonym';
import set from '../../mocks/set';

describe('getAntonym', () => {
  it('gets correct antonym for sense with one antonym', () => {
    expect(
      getAntonym(set.sensesMarkup1[2])
    ).toEqual('rise')
  });

  it('gets correct antonym for sense without antonym', () => {
    expect(
      getAntonym(set.sensesMarkup1[1])
    ).toEqual('')
  });
});
