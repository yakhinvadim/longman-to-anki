import R from 'ramda';
import ankifyExampleData from '../ankifyExampleData/ankifyExampleData.js';

const ankifySenseDataNotCurried = (headword, senseData) => {
  const cards = R.pipe(
    R.prop('examples'),
    R.map(ankifyExampleData(headword, senseData.definition, senseData.situation)),
    R.join('\n')
  )(senseData);

  return cards;
}

const ankifySenseData = R.curry(ankifySenseDataNotCurried);

export default ankifySenseData;
