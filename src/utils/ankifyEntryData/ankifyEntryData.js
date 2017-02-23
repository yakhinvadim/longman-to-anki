import R from 'ramda';

const ankifyEntryData = ({ankifySenseData, ankifyExampleData, headword}, entryData) => {
  const cards = R.pipe(
    R.prop('senses'),
    R.map(
      ankifySenseData({ ankifyExampleData, headword })
    ),
    R.join('\n')
  )(entryData);

  return cards;
}

export default R.curry(ankifyEntryData);
