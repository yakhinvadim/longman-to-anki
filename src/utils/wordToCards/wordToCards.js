import R from 'ramda';
import composeQuery from '../composeQuery/composeQuery';
import getMarkup from '../getMarkup/getMarkup';
import composeWordData from '../composeWordData/composeWordData';
import ankifyWordData from '../ankifyWordData/ankifyWordData';
import ankifyEntryData from '../ankifyEntryData/ankifyEntryData';
import ankifySenseData from '../ankifySenseData/ankifySenseData';
import ankifyExampleData from '../ankifyExampleData/ankifyExampleData';

const wordToCards = async word => {
    const query = composeQuery(word);
    const markup = await getMarkup(query);
    const wordData = composeWordData(markup);
    const cards = ankifyWordData({ ankifyEntryData, ankifySenseData, ankifyExampleData }, wordData);
    return cards;
};

export default R.memoize(wordToCards);
