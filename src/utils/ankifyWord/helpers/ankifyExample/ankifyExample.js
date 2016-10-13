import R from 'ramda';

const sideDelimiter = '#';
const smallVerticalOffset = '<br>';
const bigVerticalOffset = '<br><br>';

const ankifyExampleNotCurried = (headword, definition, situation, example) => {
  const frontSide = R.join('', [
    `${example.text}`,
    `${situation ? `${smallVerticalOffset}(${situation})` : ''}`,
    `${bigVerticalOffset}`,
    `${example.form || headword}`
  ]);
  const backSide = `${definition}`;
  const card = `${frontSide}${sideDelimiter}${backSide}`;

  return card;
}

const ankifyExample = R.curry(ankifyExampleNotCurried);

export default ankifyExample;
