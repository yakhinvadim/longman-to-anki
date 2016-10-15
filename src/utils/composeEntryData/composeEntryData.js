import R from 'ramda';
import composeSenseData from '../composeSenseData/composeSenseData.js';
import splitByClass from '../splitByClass/splitByClass.js';

export default function composeEntryData(entryMarkup) {
  return R.zipObj(
    ['senses'],
    [R.pipe(
      splitByClass('.Sense'),
      R.map(composeSenseData)
    )(entryMarkup)]
  );
}
