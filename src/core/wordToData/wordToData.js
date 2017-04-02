import R from 'ramda';
import composeQuery from '../../utils/composeQuery/composeQuery';
import composeWordData from '../composeWordData/composeWordData';

const wordToData = async word => {
	const query = composeQuery(word);
	const markup = await fetch(query).then(response => response.text());
	const wordData = composeWordData(markup);

	return wordData;
};

export default R.memoize(wordToData);
