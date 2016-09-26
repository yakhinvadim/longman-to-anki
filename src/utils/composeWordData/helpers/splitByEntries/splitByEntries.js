import cheerify from './../cheerify/cheerify.js';
import coerceArray from './../coerceArray/coerceArray.js';

export default function splitByEntries(pageMarkup) {
  const $ = cheerify(pageMarkup);

  const output = $('.Entry')
    .map((i, el) => $(el).html())
    .get();

  return coerceArray(output);
}
