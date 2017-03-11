import R from 'ramda';
import realAnkifyEntryData from '../ankifyEntryData/ankifyEntryData';

const ankifyWordData = R.curry((ankifyEntryData, wordData) => {
	const { headword, pronunciation, entries } = wordData;

	const cards = R.pipe(
		R.map(ankifyEntryData({ headword, pronunciation })),
		R.reject(R.isEmpty),
		R.join('\n')
	)(entries);

	return cards;
})

export {ankifyWordData};
export default ankifyWordData(realAnkifyEntryData);
