import R from 'ramda';
import makeCard from '../makeCard/makeCard';

const join = R.join('\n');

const ankifySenseData = R.curry((makeCard, { headword, pronunciation }, senseData) => {
  const { definition, situation, synonym, antonym, examples, exampleGroups } = senseData;

  const cardsFromExamples = R.map(R.pipe(
    R.objOf('example'),
    R.merge({ situation, form: headword, pronunciation, definition, synonym, antonym }),
    makeCard
  ))(examples);

  const cards = join(cardsFromExamples);

  return cards;
});

export {ankifySenseData};
export default ankifySenseData(makeCard);
