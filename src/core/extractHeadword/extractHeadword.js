import cheerify from '../../helpers/cheerify';

const extractHeadword = pageMarkup => {
	const $ = cheerify(pageMarkup);

	const headword =
		$('h1.pagetitle') // I add h1 in selector, because page has two .pagetitle elements, and one of them is span
			.text()
			.trim();

	return headword;
}

export default extractHeadword;
