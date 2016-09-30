import splitByEntry from './helpers/splitByEntry/splitByEntry.js';
import splitBySense from './helpers/splitBySense/splitBySense.js';
import composeSenseData from './helpers/composeSenseData/composeSenseData.js';
import R from 'ramda';

export default function composeWordData(pageMarkup) {
  const composeEntryData = (entryMarkup) => R.zipObj(
    ['senses'],
    [R.pipe(
      splitBySense,
      R.map(composeSenseData)
    )(entryMarkup)]
  );

  const result = R.zipObj(
    ['word', 'entries'],
    ['deliberately',
      R.pipe(
        splitByEntry,
        R.map(composeEntryData)
      )(pageMarkup)
  ]);

  return result;
}
