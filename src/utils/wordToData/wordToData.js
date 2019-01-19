import * as R from 'ramda'
import { unescape } from 'he'
import composeQuery from '../composeQuery/composeQuery'
import composeWordData from '../../core/composeWordData/composeWordData'
import extractHeadword from '../../core/extractHeadword/extractHeadword'

const removeDoubleSpace = R.replace(/ {2}/gm, '')
const removeNewLines = R.replace(/\n/gm, '')
const normalizeMarkup = R.pipe(
    unescape,
    removeDoubleSpace,
    removeNewLines
)

const isNotWordPage = markup => extractHeadword(markup) === null

const wordToData = async word => {
    const query = composeQuery(word)
    const escapedMarkup = await fetch(query).then(response => response.text())
    const markup = normalizeMarkup(escapedMarkup)

    if (isNotWordPage(markup)) {
        return null
    }

    const wordData = composeWordData(markup)

    return wordData
}

export { normalizeMarkup }
export default R.memoizeWith(R.toString, wordToData)
