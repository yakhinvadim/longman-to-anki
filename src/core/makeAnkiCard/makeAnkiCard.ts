import * as R from 'ramda'
import { CardData, Card } from '../../types.d'

const newLine = '<br>'
const verticalOffset = '<br><br>' // I don't use css-margins for offset, because I want cards to be styled "out of box", even without css styles

const join = R.join('')

const makeAnkiCard = (cardData: CardData): Card => {
    const {
        form,
        definition,
        example,
        situation,
        geography,
        pronunciation,
        synonym,
        antonym
    } = cardData

    // card parts

    const cardExample = `<span class="lta-example">${example}</span>`

    const cardDefinition = `<span class="lta-definition">${definition}</span>`

    const cardForm = `<span class="lta-form">${form}</span>`

    const cardMaybeSituation = situation
        ? `${newLine}<span class="lta-situation">(${situation})</span>`
        : ''

    const cardMaybeGeography = geography
        ? `${newLine}<span class="lta-geography">(${geography})</span>`
        : ''

    const cardMaybePronunciation = pronunciation
        ? `${newLine}<span class="lta-pronunciation">[${pronunciation}]</span>`
        : ''

    const cardMaybeSynonym = synonym
        ? `${newLine}<span class="lta-synonym">(synonym: ${synonym})</span>`
        : ''

    const cardMaybeAntonym = antonym
        ? `${newLine}<span class="lta-antonym">(antonym: ${antonym})</span>`
        : ''

    // card sides

    const front = example
        ? join([
              cardExample,
              cardMaybeSituation,
              cardMaybeGeography,
              verticalOffset,
              cardForm,
              cardMaybePronunciation
          ])
        : join([
              cardDefinition,
              cardMaybeSynonym,
              cardMaybeAntonym,
              cardMaybeSituation,
              cardMaybeGeography
          ])

    const back = example
        ? join([cardDefinition, cardMaybeSynonym, cardMaybeAntonym])
        : join([cardForm, cardMaybePronunciation])

    // card

    const card = { front, back }

    return card
}

export default makeAnkiCard
