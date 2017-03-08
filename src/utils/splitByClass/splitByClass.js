import cheerify from '../../helpers/cheerify';
import R from 'ramda';

const coerceArray = R.unless(R.is(Array), R.of);

const splitByClass = R.curry((className, markup) => {
  const $ = cheerify(markup);

  const output = $(className)
    .map((i, el) => $(el).html())
    .get();

  return coerceArray(output);
});

export default splitByClass;
