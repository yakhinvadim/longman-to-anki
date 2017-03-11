import cheerify from '../../helpers/cheerify';

const extractPronunciation = pageMarkup => {
	const $ = cheerify(pageMarkup);

	const pronunciationWrapper = $('.PronCodes').first();

	const britPronunciation =
		pronunciationWrapper
			.children('.PRON') // pronunciation
			.text();

	const amerPronunciation =
		pronunciationWrapper
			.children('.AMEVARPRON') // american variant pronunciation
			.text();

	return britPronunciation + amerPronunciation;
}

export default extractPronunciation;
