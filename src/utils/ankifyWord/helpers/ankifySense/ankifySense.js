import R from 'ramda';
import ankifyExample from '../ankifyExample/ankifyExample.js';

const ankifySenseNotCurried = (headword, sense) => {
  const cards = R.pipe(
    R.prop('examples'),
    R.map(ankifyExample(headword, sense.definition, sense.situation)),
    R.join('\n')
  )(sense);

  return cards;
}

const ankifySense = R.curry(ankifySenseNotCurried);

export default ankifySense;
