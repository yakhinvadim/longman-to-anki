import R from 'ramda';
import composeQuery from '../composeQuery/composeQuery';
import composeWordData from '../../core/composeWordData/composeWordData';

const wordToData = R.memoize(async word => {
	const query = composeQuery(word);
	const markup = await fetch(query).then(response => response.text());
	const wordData = composeWordData(markup);

	return wordData;
})

export default wordToData;
