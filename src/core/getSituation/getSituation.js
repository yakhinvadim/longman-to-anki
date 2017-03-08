import cheerify from '../../utils/cheerify/cheerify';

export default function getSituation(senseMarkup) {
  const $ = cheerify(senseMarkup);

  return $('.REGISTERLAB').text().trim();
}