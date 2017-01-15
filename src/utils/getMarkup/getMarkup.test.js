import getMarkup from './getMarkup';
import composeQuery from '../composeQuery/composeQuery.js';
import set from '../../mocks/set.json';

describe('getMarkup', () => {
  xit('returns correct markup for query', () => {
    return getMarkup(composeQuery('set'))
      .then(result => {
        expect(result).toEqual(set.pageMarkup);
      })
  });
});
