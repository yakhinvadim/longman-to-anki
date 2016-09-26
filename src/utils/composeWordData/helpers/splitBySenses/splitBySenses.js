import cheerio from 'cheerio';
import R from 'ramda';

const toArray = R.when(R.is(String), R.of);

export default function splitByEntries(entryMarkup) {
  const $ = cheerio.load(entryMarkup, { decodeEntities: false });

  const output = $('.Sense')
    .map((i, el) => $(el).html())
    .get();

  return toArray(output);
}
