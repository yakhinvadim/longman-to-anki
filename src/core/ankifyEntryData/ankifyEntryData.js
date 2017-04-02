import R from 'ramda';
import realAnkifySenseData from '../ankifySenseData/ankifySenseData';

const ankifyEntryData = R.curry((ankifySenseData, { headword, pronunciation }, entryData) => {
	const { senses } = entryData;

	const cards = R.map(
		ankifySenseData({ headword, pronunciation })
	)(senses);

	return cards;
});

export {ankifyEntryData};
export default ankifyEntryData(realAnkifySenseData);
