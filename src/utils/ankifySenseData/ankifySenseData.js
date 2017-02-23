import R from 'ramda';

const ankifySenseData = (ankifyExampleData, headword, senseData) => {
  const {definition, situation} = senseData;
  const cards = R.pipe(
    R.prop('examples'),
    R.map(
      ankifyExampleData({ headword, definition, situation })
    ),
    R.join('\n')
  )(senseData);

  return cards;
}

export default R.curry(ankifySenseData);
