import cheerio from 'cheerio';

export default function getDefinition(senseMarkup) {
  const $ = cheerio.load(senseMarkup, { decodeEntities: false });

  return $('.DEF').text().trim();
}
