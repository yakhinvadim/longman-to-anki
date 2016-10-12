import R from 'ramda';
import ankifySense from '../ankifySense/ankifySense.js';

const ankifyEntryNotCurried = (headword, entry) => {
  const cards = R.pipe(
    R.prop('senses'),
    R.map(ankifySense(headword)),
    R.join('\n')
  )(entry);

  return cards;
}

const ankifyEntry = R.curry(ankifyEntryNotCurried);

export default ankifyEntry;
