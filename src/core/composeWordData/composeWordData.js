import splitByClass from '../../utils/splitByClass/splitByClass';
import composeEntryData from '../composeEntryData/composeEntryData';
import extractHeadword from '../extractHeadword/extractHeadword';
import extractPronunciation from '../extractPronunciation/extractPronunciation';
import R from 'ramda';

export default function composeWordData(pageMarkup) {
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
