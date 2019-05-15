import * as R from 'ramda'
import extractPronunciation from '../extractPronunciation/extractPronunciation'
import extractPartOfSpeech from '../extractPartOfSpeech/extractPartOfSpeech'
import composeSenseData from '../composeSenseData/composeSenseData'
import splitBySelector from '../../utils/splitBySelector/splitBySelector'

const composeEntryData = (entryMarkup: string) => {
    const pronunciation = extractPronunciation(entryMarkup)
    const partOfSpeech = extractPartOfSpeech(entryMarkup)
    const senses = R.pipe(
        splitBySelector({ selector: '.Sense' }),
        R.map(composeSenseData)
    )(entryMarkup)

    const entryData = {
        senses,
        pronunciation,
        partOfSpeech
    }

    return entryData
}

export default composeEntryData
