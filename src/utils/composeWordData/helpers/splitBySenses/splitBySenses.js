import cheerify from './../cheerify/cheerify.js';
import coerceArray from './../coerceArray/coerceArray.js';

export default function splitByEntries(entryMarkup) {
  const $ = cheerify(entryMarkup);

  const output = $('.Sense')
    .map((i, el) => $(el).html())
    .get();

  return coerceArray(output);
}
