import cheerify from '../../helpers/cheerify';

export default function extractHeadword(pageMarkup) {
  const $ = cheerify(pageMarkup);

  return $('h1.pagetitle').text().trim();
}
