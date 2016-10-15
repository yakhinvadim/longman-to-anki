import cheerify from '../cheerify/cheerify.js';

export default function getHeadword(pageMarkup) {
  const $ = cheerify(pageMarkup);

  return $('h1.pagetitle').text().trim();
}
