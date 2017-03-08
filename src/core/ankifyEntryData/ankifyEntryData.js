import R from 'ramda';

const ankifyEntryData = ({ankifySenseData, ankifyExampleData, ankifyNoExampleData, headword, pronunciation}, entryData) => {
  const cards = R.pipe(
    R.prop('senses'),
    R.map(
      ankifySenseData({ ankifyExampleData, ankifyNoExampleData, headword, pronunciation })
    ),
    R.reject(R.isEmpty),
    R.join('\n')
  )(entryData);

  return cards;
}

export default R.curry(ankifyEntryData);
