import cheerify from '../../utils/cheerify/cheerify';

const extractAntonym = senseMarkup => {
	const $ = cheerify(senseMarkup);

	const antonym =
		$('.OPP') // opposite
			.contents()
			.not('.synopp') // element with text "SYN" or "OPP"
			.text()
			.trim();

	return antonym;
}

export default extractAntonym;
