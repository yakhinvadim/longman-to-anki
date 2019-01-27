import * as R from 'ramda'
import normalizeEntryData from '../normalizeEntryData/normalizeEntryData'

const normalizeWordData = (wordData: any) => {
    const { headword, pronunciation, frequency, entries } = wordData

    const cards = R.pipe(
        R.map(normalizeEntryData({ headword, pronunciation, frequency })),
        R.flatten,
        R.reject(R.isEmpty)
    )(entries)

    return cards
}

export default normalizeWordData
