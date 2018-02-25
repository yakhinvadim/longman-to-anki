import * as R from 'ramda'
import normalizeSenseData from '../normalizeSenseData/normalizeSenseData'

const normalizeEntryData = R.curry(
    ({ headword, pronunciation, frequency }, entryData) => {
        const { senses } = entryData

        const cards = R.map(
            normalizeSenseData({ headword, pronunciation, frequency })
        )(senses)

        return cards
    }
)

export default normalizeEntryData
