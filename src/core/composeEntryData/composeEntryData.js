import R from 'ramda';
import composeSenseData from '../composeSenseData/composeSenseData';
import splitByClass from '../../utils/splitByClass/splitByClass';

export default function composeEntryData(entryMarkup) {
  return R.zipObj(
    ['senses'],
    [R.pipe(
      splitByClass('Sense'),
      R.map(composeSenseData)
    )(entryMarkup)]
  );
}
