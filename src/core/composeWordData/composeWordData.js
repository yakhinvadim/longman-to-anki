import R from 'ramda';
import splitByClass from '../../utils/splitByClass/splitByClass';
import extractHeadword from '../extractHeadword/extractHeadword';
import extractPronunciation from '../extractPronunciation/extractPronunciation';
import composeEntryData from '../composeEntryData/composeEntryData';

const composeWordData = pageMarkup => {
  const headword = extractHeadword(pageMarkup);
  const pronunciation = extractPronunciation(pageMarkup);
  const entries = R.pipe(
    splitByClass('ldoceEntry'),
    R.map(composeEntryData)
  )(pageMarkup);

  const wordData = {
    headword,
    pronunciation,
    entries
  };

  return wordData;
}

export default composeWordData;
