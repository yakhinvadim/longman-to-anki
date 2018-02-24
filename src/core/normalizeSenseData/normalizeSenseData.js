import * as R from 'ramda'

const normalizeSenseData = R.curry(
    ({ headword, pronunciation, frequency }, senseData) => {
        // data

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

        const normalizeExample = form => example => ({
            ...commonData,
            example,
            form
        })

        const normalizeExampleGroup = exampleGroup => {
            const { form, examples: exampleGroupExamples } = exampleGroup
            const cards = exampleGroupExamples.map(normalizeExample(form))
            return cards
        }

        // different card types

        const cardsFromExamples = R.map(normalizeExample(headword))(examples)

        const cardsFromExampleGroups = R.map(normalizeExampleGroup)(
            exampleGroups
        )

        const cardsFromSubsenses = R.map(
            normalizeSenseData({ headword, pronunciation, frequency })
        )(subsenses)

        const cardFromDefinition = R.all(R.isEmpty, [
            examples,
            exampleGroups,
            subsenses
        ]) && definition
            ? { ...commonData, form: headword }
            : {}

        // all cards

        const cards = [
            cardsFromExamples,
            cardsFromExampleGroups,
            cardsFromSubsenses,
            cardFromDefinition
        ]

        return cards
    }
)

export default normalizeSenseData
