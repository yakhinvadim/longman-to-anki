import * as R from 'ramda'
import flattenDeep from 'lodash/flatten'
import { WordData, SenseData, CardData, ExampleGroup } from '../../types.d'

const normalizeSenseData = (wordData: WordData) => (
    senseData: SenseData
): CardData[] => {
    const { headword, pronunciation, frequency } = wordData

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

    const cardsFromSubsenses = R.map(normalizeSenseData(wordData))(subsenses)

    const cardsFromDefinition =
        R.all(R.isEmpty, [examples, exampleGroups, subsenses]) && definition
            ? [{ ...commonData, form: headword, example: '' }]
            : []

    // all cards

    // TODO:  find out why single top-level flattenDeep is not enough
    const cards = flattenDeep([
        cardsFromExamples,
        flattenDeep(cardsFromExampleGroups),
        flattenDeep(cardsFromSubsenses),
        cardsFromDefinition
    ])

    return cards
}

export default normalizeSenseData
