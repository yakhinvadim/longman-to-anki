import { wordsToQueriesWith } from './wordsToQueries';
import R from 'ramda';

describe('wordsToQueries', () => {
  xit('make correct query from one word', () => {
    expect(
      wordsToQueriesWith(R.identity)( '  set ')
    ).toBe(['set'])
  });

  xit('make correct query from two words', () => {
    expect(
      wordsToQueriesWith(R.identity)('  set ,    deliberately  ')
    ).toBe(['set', 'deliberately'])
  });
});
