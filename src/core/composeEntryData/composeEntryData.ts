import * as R from 'ramda'
import extractPronunciation from '../extractPronunciation/extractPronunciation'
import composeSenseData from '../composeSenseData/composeSenseData'
import splitBySelector from '../../utils/splitBySelector/splitBySelector'

const composeEntryData = (entryMarkup: string) => {
    const pronunciation = extractPronunciation(entryMarkup)
    const senses = R.pipe(
        splitBySelector({ selector: '.Sense' }),
        R.map(composeSenseData)
    )(entryMarkup)

    const entryData = {
        senses,
        pronunciation
    }

    return entryData
}

export default composeEntryData
