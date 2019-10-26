import * as R from 'ramda'
import flattenDepth from 'lodash/flattenDepth'
import {
    WordData,
    EntryData,
    SenseData,
    CardData,
    ExampleGroup
} from '../../types.d'

const normalizeSenseData = ({
    wordData,
    entryData
}: {
    wordData: WordData
    entryData: EntryData
}) => (senseData: SenseData): CardData[] => {
    const { headword, frequency } = wordData
    const { pronunciation, partOfSpeech } = entryData

    const {
        definition,
        situation,
        geography,
        synonym,
        antonym,
        examples,
        exampleGroups,
        subsenses
    } = senseData

    const commonData = {
        headword,
        pronunciation,
        partOfSpeech,
        frequency,
        definition,
        situation,
        geography,
        synonym,
        antonym
    }

    // normalize... functions

    const normalizeExample = (form: string) => (example: string) => ({
        ...commonData,
        example,
        form
    })

    const normalizeExampleGroup = (exampleGroup: ExampleGroup) => {
        const { form, examples: exampleGroupExamples } = exampleGroup
        const cards = exampleGroupExamples.map(normalizeExample(form))
        return cards
    }

    // cards from different sources

    const cardsFromExamples = R.map(normalizeExample(headword))(examples)

    const cardsFromExampleGroups = R.map(normalizeExampleGroup)(exampleGroups)

    const cardsFromSubsenses = R.map(
        normalizeSenseData({ wordData, entryData })
    )(subsenses)

    const cardsFromDefinition =
        R.all(R.isEmpty, [examples, exampleGroups, subsenses]) && definition
            ? [{ ...commonData, form: headword, example: '' }]
            : []

    // all cards

    const cards = flattenDepth(
        [
            cardsFromExamples,
            cardsFromExampleGroups,
            cardsFromSubsenses,
            cardsFromDefinition
        ],
        2
    )

    return cards
}

export default normalizeSenseData
