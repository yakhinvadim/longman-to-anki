import getWords from '../getWords/getWords';
import getMarkup from '../getMarkup/getMarkup';
import composeQuery from '../composeQuery/composeQuery';
import composeWordData from '../composeWordData/composeWordData';
import R from 'ramda';

const getWordsData = async wordsStr => {
  const queries = R.pipe(
    getWords,
    R.map(composeQuery)
  )(wordsStr);

  const markups = await R.map(getMarkup)(queries);

  const wordsData = composeWordData(markups);

  return wordsData;
}

export default getWordsData;
