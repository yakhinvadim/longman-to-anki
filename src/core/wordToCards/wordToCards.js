import R from 'ramda';
import composeQuery from '../../utils/composeQuery/composeQuery';
import composeWordData from '../composeWordData/composeWordData';
import ankifyWordData from '../ankifyWordData/ankifyWordData';

const wordToCards = async word => {
	const query = composeQuery(word);
	const markup = await fetch(query).then(response => response.text());
	const wordData = composeWordData(markup);
	const cards = ankifyWordData(wordData);

	return cards;
};

export default R.memoize(wordToCards);
