import composeQuery from '../composeQuery/composeQuery';
import R from 'ramda';

const wordsToQueriesWith = (func) => R.pipe(
  R.split(','),
  R.map(R.pipe(
    R.trim,
    func
  ))
);

const wordsToQueries = wordsToQueriesWith(composeQuery);

export { wordsToQueriesWith };
export default wordsToQueries;
