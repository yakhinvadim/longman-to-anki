import splitByClass from './helpers/splitByClass/splitByClass.js';
import composeEntryData from './helpers/composeEntryData/composeEntryData.js';
import getHeadword from './helpers/getHeadword/getHeadword.js';
import R from 'ramda';

export default function composeWordData(pageMarkup) {
  return R.zipObj(
    [
      'word',
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
