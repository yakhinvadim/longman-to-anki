import cheerify from '../../helpers/cheerify';

export default function extractSituation(senseMarkup) {
  const $ = cheerify(senseMarkup);

  return $('.REGISTERLAB').text().trim();
}
