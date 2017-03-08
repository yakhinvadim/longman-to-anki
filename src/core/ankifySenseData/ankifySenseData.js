import R from 'ramda';

const ankifySenseData = ({ankifyExampleData, ankifyNoExampleData, headword, pronunciation}, senseData) => {
  const { definition, situation, synonym, antonym } = senseData;

  const ankifySenseDataWithExamples = R.pipe(
    R.prop('examples'),
    R.map(ankifyExampleData({ headword, pronunciation, definition, situation, synonym, antonym })),
    R.join('\n')
  );
  
  const cards = R.cond([
    [R.pipe(R.prop('definition'), R.isEmpty), R.always('')],
    [R.pipe(R.prop('examples'  ), R.isEmpty), ankifyNoExampleData({headword, pronunciation})],
    [R.T,                                     ankifySenseDataWithExamples]
  ])(senseData);

  return cards;
}

export default R.curry(ankifySenseData);
