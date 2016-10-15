import splitByClass from '../splitByClass/splitByClass.js';
import composeEntryData from '../composeEntryData/composeEntryData.js';
import getHeadword from '../getHeadword/getHeadword.js';
import R from 'ramda';

export default function composeWordData(pageMarkup) {
  return R.zipObj(
    [
      'headword',
      'entries'
    ],
    [
      getHeadword(pageMarkup),
      R.pipe(
        splitByClass('.ldoceEntry'),
        R.map(composeEntryData)
      )(pageMarkup)
    ]
  );
}
