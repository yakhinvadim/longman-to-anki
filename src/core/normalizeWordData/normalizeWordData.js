import R from 'ramda';
import realNormalizeEntryData from '../normalizeEntryData/normalizeEntryData';

const normalizeWordData = R.curry((normalizeEntryData, wordData) => {
	const { headword, pronunciation, entries } = wordData;

	const cards = R.map(
		normalizeEntryData({ headword, pronunciation })
	)(entries);

	return cards;
})

export {normalizeWordData};
export default normalizeWordData(realNormalizeEntryData);
