import splitByClass from './helpers/splitByClass/splitByClass.js';
import composeEntryData from './helpers/composeEntryData/composeEntryData.js';
import getWord from './helpers/getWord/getWord.js';
import R from 'ramda';

export default function composeWordData(pageMarkup) {
  return R.zipObj(
    [
      'word',
      'entries'
    ],
    [
      getWord(pageMarkup),
      R.pipe(
        splitByClass('.ldoceEntry'),
        R.map(composeEntryData)
      )(pageMarkup)
    ]
  );
}
