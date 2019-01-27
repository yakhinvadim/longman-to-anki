import * as R from 'ramda'
import normalizeEntryData from '../normalizeEntryData/normalizeEntryData'
import { WordData } from '../../types.d'
import flattenDeep from 'lodash/flatten'

const normalizeWordData = (wordData: WordData) => {
    const cards = R.pipe(
        R.map(normalizeEntryData(wordData)),
        flattenDeep
    )(wordData.entries)

    return cards
}

export default normalizeWordData
