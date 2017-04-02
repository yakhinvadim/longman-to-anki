import cheerify from '../../utils/cheerify/cheerify';

const extractGeography = senseMarkup => {
	const $ = cheerify(senseMarkup);

	const geography =
		$('.GEO')
			.text()
			.trim()

	return geography;
}

export default extractGeography;
