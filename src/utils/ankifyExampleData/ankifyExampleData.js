import R from 'ramda';

const sideDelimiter = '#';
const smallVerticalOffset = '<br>';
const bigVerticalOffset = '<br><br>';

const ankifyExampleDataNotCurried = (headword, definition, situation, exampleData) => {
  const frontSide = R.join('', [
    `${exampleData.text}`,
    `${situation ? `${smallVerticalOffset}(${situation})` : ''}`,
    `${bigVerticalOffset}`,
    `${exampleData.form || headword}`
  ]);
  const backSide = `${definition}`;
  const card = `${frontSide}${sideDelimiter}${backSide}`;

  return card;
}

const ankifyExampleData = R.curry(ankifyExampleDataNotCurried);

export default ankifyExampleData;
