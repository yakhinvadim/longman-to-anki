import R from 'ramda';

const sideDelimiter = '#';
// I don't use css-margins for offset, because I want cards to be styled "out of box", even without css styles
const smallVerticalOffset = '<br>';
const bigVerticalOffset = '<br><br>';

const join = R.join('');

const ankifyExampleData = ({headword, definition, situation}, exampleData) => {

  // card parts

  const cardExample = `<span class="lta-example">${exampleData.text}</span>`;

  const cardMaybeSituation = situation
    ? `${smallVerticalOffset}<span class="lta-situation">(${situation})</span>`
    : '';

  const cardForm = exampleData.form
    ? `<span class="lta-form">${exampleData.form}</span>`
    : `<span class="lta-headword">${headword}</span>`;
  
  const cardDefinition = `<span class="lta-definition">${definition}</span>`;


  // card sides 

  const frontSide = join([
    cardExample,
    cardMaybeSituation,
    bigVerticalOffset,
    cardForm
  ]);

  const backSide = cardDefinition;


  // card

  const card = join([
    frontSide,
    sideDelimiter,
    backSide
  ]);

  return card;
}

export default R.curry(ankifyExampleData);
