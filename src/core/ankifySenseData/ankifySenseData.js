import R from 'ramda';
import makeCard from '../makeCard/makeCard';

const join = R.join('\n');

const ankifySenseData = R.curry((makeCard, { headword, pronunciation }, senseData) => {
  const { definition, situation, synonym, antonym, examples, exampleGroups, subsenses } = senseData;

  
  const ankifyExample = R.pipe(
    R.objOf('example'),
    R.merge({ situation, form: headword, pronunciation, definition, synonym, antonym }),
    makeCard
  );
  
  const ankifyExampleGroup = exampleGroup => {
    const { form: innerForm, examples: innerExamples } = exampleGroup;

    const cards = R.map(R.pipe(
      R.objOf('example'),
      R.merge({ situation, form: innerForm, pronunciation, definition, synonym, antonym }),
      makeCard
    ))(innerExamples);
    
    return join(cards);
  }

  const cardsFromExamples = examples
    ? R.pipe(R.map(ankifyExample), join)(examples)
    : '';

  const cardsFromExampleGroups = exampleGroups
    ? R.pipe(R.map(ankifyExampleGroup), join)(exampleGroups)
    : '';

  const cardsFromSubsenses = subsenses
    ? R.pipe(R.map(ankifySenseData(makeCard, { headword, pronunciation })), join)(subsenses)
    : '';
  
  // TODO add cards if no examples

  const cards = R.pipe(
    R.reject(R.isEmpty),
    join
  )([cardsFromExamples, cardsFromExampleGroups, cardsFromSubsenses]);

  return cards;
});

export {ankifySenseData};
export default ankifySenseData(makeCard);
