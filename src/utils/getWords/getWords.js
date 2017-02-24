import R from 'ramda';

const getWords = R.pipe(
  R.split('\n'),
  R.map(R.trim),
  R.filter(R.complement(R.isEmpty))
);

export default getWords;
