import R from 'ramda';
import realNormalizeSenseData from '../normalizeSenseData/normalizeSenseData';

const normalizeEntryData = R.curry((normalizeSenseData, { headword, pronunciation }, entryData) => {
	const { senses } = entryData;

	const cards = R.map(
		normalizeSenseData({ headword, pronunciation })
	)(senses);

	return cards;
});

export {normalizeEntryData};
export default normalizeEntryData(realNormalizeSenseData);
