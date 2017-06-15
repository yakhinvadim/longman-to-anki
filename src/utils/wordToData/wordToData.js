import R from 'ramda';
import { unescape } from 'he';
import composeQuery from '../composeQuery/composeQuery';
import composeWordData from '../../core/composeWordData/composeWordData';

const removeNewLines = R.replace(/\n/gm, '');

const wordToData = R.memoize(async word => {
	const query = composeQuery(word);
	const escapedMarkup = await fetch(query).then(response => response.text());
	
	const wordData = R.pipe(
		unescape,
		removeNewLines,
		composeWordData
	)(escapedMarkup)

	return wordData;
})

export default wordToData;
