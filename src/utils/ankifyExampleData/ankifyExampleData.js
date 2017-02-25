import R from 'ramda';

const sideDelimiter = '#';
// I don't use css-margins for offset, because I want cards to be styled "out of box", even without css styles
const newLine = '<br>';
const verticalOffset = '<br><br>';

const join = R.join('');

const ankifyExampleData = ({headword, definition, situation, synonym}, exampleData) => {

  // card parts

  const cardExample = `<span class="lta-example">${exampleData.text}</span>`;

  const cardMaybeSituation = situation
    ? `${newLine}<span class="lta-situation">(${situation})</span>`
    : '';
  
  const cardMaybeSynonym = synonym
    ? `${newLine}<span class="lta-synonym">(synonym: ${synonym})</span>`
    : '';

  const cardForm = exampleData.form
    ? `<span class="lta-form">${exampleData.form}</span>`
    : `<span class="lta-headword">${headword}</span>`;
  
  const cardDefinition = `<span class="lta-definition">${definition}</span>`;


  // card sides 

  const frontSide = join([
    cardExample,
    cardMaybeSituation,
    verticalOffset,
    cardForm
  ]);

  const backSide = join([
    cardDefinition,
    cardMaybeSynonym
  ]);

  // card

  const card = join([
    frontSide,
    sideDelimiter,
    backSide
  ]);

  return card;
}

export default R.curry(ankifyExampleData);
