import R from 'ramda';
import normalizeSenseData from '../normalizeSenseData/normalizeSenseData';

const normalizeEntryData = R.curry(({ headword, pronunciation }, entryData) => {
	const { senses } = entryData;

	const cards = R.map(
		normalizeSenseData({ headword, pronunciation })
	)(senses);

	return cards;
});

export default normalizeEntryData;
