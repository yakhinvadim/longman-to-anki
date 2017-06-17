import R from 'ramda';
import normalizeEntryData from '../normalizeEntryData/normalizeEntryData';

const normalizeWordData = (wordData) => {
	const { headword, pronunciation, entries } = wordData;

	const cards = R.map(
		normalizeEntryData({ headword, pronunciation })
	)(entries);

	return cards;
}

export default normalizeWordData;
