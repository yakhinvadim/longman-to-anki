import cheerio from 'cheerio';
import R from 'ramda';

const toArray = R.when(R.is(String), R.of);

export default function splitByEntries(pageMarkup) {
  const $ = cheerio.load(pageMarkup, { decodeEntities: false });

  const output = $('.Entry')
    .map((i, el) => $(el).html())
    .get();

  return toArray(output);
}
