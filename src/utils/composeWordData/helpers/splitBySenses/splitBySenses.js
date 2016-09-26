import cheerio from 'cheerio';
import R from 'ramda';

const coerceArray = R.unless(R.is(Array), R.of);

export default function splitByEntries(entryMarkup) {
  const $ = cheerio.load(entryMarkup, { decodeEntities: false });

  const output = $('.Sense')
    .map((i, el) => $(el).html())
    .get();

  return coerceArray(output);
}
