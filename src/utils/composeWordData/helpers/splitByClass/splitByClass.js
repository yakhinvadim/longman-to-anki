import cheerify from './../cheerify/cheerify.js';
import coerceArray from './../coerceArray/coerceArray.js';
import R from 'ramda';

const splitByClass = R.curry((className, markup) => {
  const $ = cheerify(markup);

  const output = $(className)
    .map((i, el) => $(el).html())
    .get();

  return coerceArray(output);
});

export default splitByClass;
