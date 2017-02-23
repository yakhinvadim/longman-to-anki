import R from 'ramda';

const ankifyWordData = ({ankifyEntryData, ankifySenseData, ankifyExampleData}, wordData) => {
  const {headword} = wordData;
  const cards = R.pipe(
    R.prop('entries'),
    R.map(
      ankifyEntryData({ankifySenseData, ankifyExampleData, headword})
    ),
    R.join('\n')
  )(wordData);

  return cards;
}

export default R.curry(ankifyWordData);
