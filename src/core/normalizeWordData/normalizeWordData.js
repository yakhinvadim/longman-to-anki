import R from 'ramda'
import normalizeEntryData from '../normalizeEntryData/normalizeEntryData'

const normalizeWordData = wordData => {
    const { headword, pronunciation, entries } = wordData

    const cards = R.pipe(
        R.map(normalizeEntryData({ headword, pronunciation })),
        R.flatten
    )(entries)

    return cards
}

export default normalizeWordData
