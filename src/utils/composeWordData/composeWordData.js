import splitByClass from './helpers/splitByClass/splitByClass.js';
import composeSenseData from './helpers/composeSenseData/composeSenseData.js';
import R from 'ramda';

export default function composeWordData(pageMarkup) {
  const composeEntryData = (entryMarkup) => R.zipObj(
    ['senses'],
    [R.pipe(
      splitByClass('.Sense'),
      R.map(composeSenseData)
    )(entryMarkup)]
  );

  const result = R.zipObj(
    ['word', 'entries'],
    ['deliberately',
      R.pipe(
        splitByClass('.Entry'),
        R.map(composeEntryData)
      )(pageMarkup)
  ]);

  return result;
}
