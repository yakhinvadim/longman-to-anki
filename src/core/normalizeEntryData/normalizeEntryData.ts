import * as R from 'ramda'
import normalizeSenseData from '../normalizeSenseData/normalizeSenseData'
import { WordData, EntryData } from '../../types.d'
import flattenDeep from 'lodash/flatten'

const normalizeEntryData = (wordData: WordData) => (entryData: EntryData) => {
    const cards = flattenDeep(
        R.map(normalizeSenseData({ wordData, entryData }))(entryData.senses)
    )

    return cards
}

export default normalizeEntryData
