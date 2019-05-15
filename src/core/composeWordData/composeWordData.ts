import * as R from 'ramda'
import splitBySelector from '../../utils/splitBySelector/splitBySelector'
import extractHeadword from '../extractHeadword/extractHeadword'
import extractFrequency from '../extractFrequency/extractFrequency'
import composeEntryData from '../composeEntryData/composeEntryData'

const composeWordData = (pageMarkup: string) => {
    const headword = extractHeadword(pageMarkup)
    const frequency = extractFrequency(pageMarkup)
    const entries = R.pipe(
        splitBySelector({ selector: '.ldoceEntry' }),
        R.map(composeEntryData)
    )(pageMarkup)

    const wordData = {
        headword,
        frequency,
        entries
    }

    return wordData
}

export default composeWordData
