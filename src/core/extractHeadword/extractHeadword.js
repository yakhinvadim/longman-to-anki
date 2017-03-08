import cheerify from '../../helpers/cheerify';

export default function extractHeadword(pageMarkup) {
  const $ = cheerify(pageMarkup);

  const headword =
    $('h1.pagetitle') // I add h1 here, because page has two .pagetitle elements, and one of them is span
      .text()
      .trim();
  
  return headword;
}
