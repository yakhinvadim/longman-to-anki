import R from 'ramda';

const sideDelimiter = '#';
const newLine = '<br>';
const verticalOffset = '<br><br>'; // I don't use css-margins for offset, because I want cards to be styled "out of box", even without css styles

const join = R.join('');

const makeCard = ({example, situation, form, pronunciation, definition, synonym, antonym}) => {

  // card parts

  const cardExample = `<span class="lta-example">${example}</span>`;

  const cardDefinition = `<span class="lta-definition">${definition}</span>`;
    
  const cardForm = `<span class="lta-form">${form}</span>`;
    
  const cardMaybeSituation = situation ? `${newLine}<span class="lta-situation">(${situation})</span>` : '';
    
  const cardMaybePronunciation = pronunciation ? `${newLine}<span class="lta-pronunciation">[${pronunciation}]</span>` : '';

  const cardMaybeSynonym = synonym ? `${newLine}<span class="lta-synonym">(synonym: ${synonym})</span>` : '';
  
  const cardMaybeAntonym = antonym ? `${newLine}<span class="lta-antonym">(antonym: ${antonym})</span>` : '';

  
  // card sides

  const frontSide = example
    ? join([
        cardExample,
        cardMaybeSituation,
        verticalOffset,
        cardForm,
        cardMaybePronunciation
      ])
    : join([
        cardDefinition,
        cardMaybeSynonym,
        cardMaybeAntonym,
        cardMaybeSituation
    ])

  const backSide = example
    ? join([
        cardDefinition,
        cardMaybeSynonym,
        cardMaybeAntonym
      ])
    : join([
        cardForm,
        cardMaybePronunciation
    ]);

  
  // card

  const card = join([
    frontSide,
    sideDelimiter,
    backSide
  ]);  

  return card;
}

export default makeCard;
