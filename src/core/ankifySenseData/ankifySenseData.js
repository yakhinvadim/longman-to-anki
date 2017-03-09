import R from 'ramda';
import makeCard from '../makeCard/makeCard';

const join = R.join('\n');

const ankifySenseData = R.curry((makeCard, { headword, pronunciation }, senseData) => {
  const { definition, situation, synonym, antonym, examples, exampleGroups } = senseData;

  
  const ankifyExample = R.pipe(
    R.objOf('example'),
    R.merge({ situation, form: headword, pronunciation, definition, synonym, antonym }),
    makeCard
  );

  const ankifyExampleGroup = R.pipe(
    R.merge({ situation, pronunciation, definition, synonym, antonym }),
    makeCard
  );

  
  const cardsFromExamples = examples
    ? R.pipe(R.map(ankifyExample), join)(examples)
    : '';

  const cardsFromExampleGroups = exampleGroups
    ? R.pipe(R.map(ankifyExampleGroup), join)(exampleGroups)
    : '';

  
  const cards = R.pipe(
    R.reject(R.isEmpty),
    join
  )([cardsFromExamples, cardsFromExampleGroups]);

  return cards;
});

export {ankifySenseData};
export default ankifySenseData(makeCard);
