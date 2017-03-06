import splitByClass from '../splitByClass/splitByClass.js';
import composeEntryData from '../composeEntryData/composeEntryData.js';
import getHeadword from '../getHeadword/getHeadword.js';
import getPronunciation from '../getPronunciation/getPronunciation.js';
import R from 'ramda';

export default function composeWordData(pageMarkup) {
  const wordData = R.zipObj(
    [
      'headword',
      'pronunciation',
      'entries'
    ],
    [
      getHeadword(pageMarkup),
      getPronunciation(pageMarkup),
      R.pipe(
        splitByClass('.ldoceEntry'),
        R.map(composeEntryData)
      )(pageMarkup)
    ]
  );

  return wordData;
}
