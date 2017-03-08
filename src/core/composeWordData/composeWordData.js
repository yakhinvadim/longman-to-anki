import R from 'ramda';

import splitByClass from '../../utils/splitByClass/splitByClass';
import extractHeadword from '../extractHeadword/extractHeadword';
import extractPronunciation from '../extractPronunciation/extractPronunciation';
import composeEntryData from '../composeEntryData/composeEntryData';

const composeWordData = pageMarkup => {
  const wordData = R.zipObj(
    [
      'headword',
      'pronunciation',
      'entries'
    ],
    [
      extractHeadword(pageMarkup),
      extractPronunciation(pageMarkup),
      R.pipe(
        splitByClass('ldoceEntry'),
        R.map(composeEntryData)
      )(pageMarkup)
    ]
  );

  return wordData;
 }

export default composeWordData;
