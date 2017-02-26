import R from 'ramda';

const sideDelimiter = '#';
// I don't use css-margins for offset, because I want cards to be styled "out of box", even without css styles
const newLine = '<br>';

const join = R.join('');

const ankifyNoExampleData = (headword, {definition, situation, synonym, antonym}) => {

  // card parts

  const cardMaybeSituation = situation
    ? `${newLine}<span class="lta-situation">(${situation})</span>`
    : '';
  
  const cardMaybeSynonym = synonym
    ? `${newLine}<span class="lta-synonym">(synonym: ${synonym})</span>`
    : '';
  
  const cardMaybeAntonym = antonym
    ? `${newLine}<span class="lta-antonym">(antonym: ${antonym})</span>`
    : '';

  const cardForm = `<span class="lta-headword">${headword}</span>`;
  
  const cardDefinition = `<span class="lta-definition">${definition}</span>`;


  // card sides 

  const frontSide = join([
    cardDefinition,
    cardMaybeSynonym,
    cardMaybeAntonym,
    cardMaybeSituation
  ]);

  const backSide = cardForm;

  // card

  const card = join([
    frontSide,
    sideDelimiter,
    backSide
  ]);

  return card;
}

export default R.curry(ankifyNoExampleData);
