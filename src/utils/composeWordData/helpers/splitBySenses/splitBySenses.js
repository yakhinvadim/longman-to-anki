import cheerify from './../cheerify/cheerify.js';
import R from 'ramda';

const coerceArray = R.unless(R.is(Array), R.of);

export default function splitByEntries(entryMarkup) {
  const $ = cheerify(entryMarkup);

  const output = $('.Sense')
    .map((i, el) => $(el).html())
    .get();

  return coerceArray(output);
}
