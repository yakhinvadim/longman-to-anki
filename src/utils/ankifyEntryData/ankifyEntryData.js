import R from 'ramda';
import ankifySenseData from '../ankifySenseData/ankifySenseData.js';

const ankifyEntryDataNotCurried = (headword, entryData) => {
  const cards = R.pipe(
    R.prop('senses'),
    R.map(ankifySenseData(headword)),
    R.join('\n')
  )(entryData);

  return cards;
}

const ankifyEntryData = R.curry(ankifyEntryDataNotCurried);

export default ankifyEntryData;
