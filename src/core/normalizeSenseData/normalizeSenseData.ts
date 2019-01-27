import * as R from 'ramda'

const normalizeSenseData: any = R.curry(
    (
        { headword, pronunciation, frequency },
        senseData: {
            definition: any
            situation: any
            geography: any
            synonym: any
            antonym: any
            examples: any
            exampleGroups: any
            subsenses: any
        }
    ) => {
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

        const normalizeExample = (form: any) => (example: any) => ({
            ...commonData,
            example,
            form
        })

        const normalizeExampleGroup = (exampleGroup: any) => {
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

        const cardFromDefinition =
            R.all(R.isEmpty, [examples, exampleGroups, subsenses]) && definition
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
