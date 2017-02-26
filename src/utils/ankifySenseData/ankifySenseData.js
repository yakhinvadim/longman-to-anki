import R from 'ramda';

const ankifySenseData = ({ankifyExampleData, ankifyNoExampleData, headword}, senseData) => {
  const {definition, situation, synonym, antonym} = senseData;
  const cards = R.pipe(
    R.ifElse(
      R.pipe(
        R.prop('examples'),
        R.isEmpty
      ),
      R.pipe(
        ankifyNoExampleData(headword),
        R.unless(R.is(Array), R.of)
      ),
      R.pipe(
        R.prop('examples'),
        R.map(
          ankifyExampleData({ headword, definition, situation, synonym, antonym })
        )
      )
    ),
    R.join('\n')
  )(senseData);

  return cards;
}

export default R.curry(ankifySenseData);
