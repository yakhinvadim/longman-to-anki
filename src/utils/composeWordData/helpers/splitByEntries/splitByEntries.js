import cheerify from './../cheerify/cheerify.js';
import R from 'ramda';

const toArray = R.when(R.is(String), R.of);

export default function splitByEntries(pageMarkup) {
  const $ = cheerify(pageMarkup);

  const output = $('.Entry')
    .map((i, el) => $(el).html())
    .get();

  return toArray(output);
}
