import R from 'ramda';

const sideDelimiter = '#';
const verticalOffset = '<br><br>';

const ankifyExampleNotCurried = (headword, definition, example) => {
  const frontSide = `${example.text}${verticalOffset}${example.form || headword}`;
  const backSide = `${definition}`;
  const card = `${frontSide}${sideDelimiter}${backSide}`;

  return card;
}

const ankifyExample = R.curry(ankifyExampleNotCurried);

export default ankifyExample;
