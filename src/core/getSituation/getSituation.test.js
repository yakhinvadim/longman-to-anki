import getSituation from './getSituation';
import set from '../../mocks/set';

describe('getSituation', () => {
  it('gets correct situation for sense with one situation', () => {
    expect(
      getSituation(set.sensesMarkup3[0])
    ).toEqual('informal')
  });

  it('gets correct situation for sense without situation', () => {
    expect(
      getSituation(set.sensesMarkup2[0])
    ).toEqual('')
  });
});
