import R from 'ramda';

const ankifyWordData = ({ankifyEntryData, ankifySenseData, ankifyExampleData, ankifyNoExampleData}, wordData) => {
  const {headword} = wordData;
  const cards = R.pipe(
    R.prop('entries'),
    R.map(
      ankifyEntryData({ankifySenseData, ankifyExampleData, ankifyNoExampleData, headword})
    ),
    R.join('\n')
  )(wordData);

  return cards;
}

export default R.curry(ankifyWordData);
