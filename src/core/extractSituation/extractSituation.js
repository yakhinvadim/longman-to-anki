import cheerify from '../../utils/cheerify/cheerify';

const extractSituation = senseMarkup => {
	const $ = cheerify(senseMarkup);

	const situation =
		$('.REGISTERLAB')
			.text()
			.trim()

	return situation;
}

export default extractSituation;
