import * as R from 'ramda'
import splitBySelector from '../../utils/splitBySelector/splitBySelector'
import extractHeadword from '../extractHeadword/extractHeadword'
import extractPronunciation from '../extractPronunciation/extractPronunciation'
import extractFrequency from '../extractFrequency/extractFrequency'
import composeEntryData from '../composeEntryData/composeEntryData'

const composeWordData = pageMarkup => {
    const headword = extractHeadword(pageMarkup)
    const pronunciation = extractPronunciation(pageMarkup)
    const frequency = extractFrequency(pageMarkup)
    const entries = R.pipe(
        splitBySelector({ selector: '.ldoceEntry' }),
        R.map(composeEntryData)
    )(pageMarkup)

    const wordData = {
        headword,
        pronunciation,
        frequency,
        entries
    }

    return wordData
}

export default composeWordData
