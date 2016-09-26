import cheerify from './../cheerify/cheerify.js';

export default function getDefinition(senseMarkup) {
  const $ = cheerify(senseMarkup);

  return $('.DEF').text().trim();
}
