import R from 'ramda';

const coerceArray = R.unless(R.is(Array), R.of);

export default coerceArray;
