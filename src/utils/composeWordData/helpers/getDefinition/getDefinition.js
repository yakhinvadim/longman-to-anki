import cheerio from 'cheerio';

export default function splitByEntries(senseMarkup) {
  const $ = cheerio.load(senseMarkup, { decodeEntities: false });

  return $('.DEF').text();
}
