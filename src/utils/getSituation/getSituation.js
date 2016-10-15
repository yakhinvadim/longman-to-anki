import cheerify from '../cheerify/cheerify.js';

export default function getSituation(senseMarkup) {
  const $ = cheerify(senseMarkup);

  return $('.REGISTERLAB').text().trim();
}
