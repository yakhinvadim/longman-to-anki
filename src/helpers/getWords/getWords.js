import R from 'ramda';

const getWords = R.pipe(
  R.split('\n'),
  R.map(R.trim),
  R.reject(R.isEmpty)
);

export default getWords;
