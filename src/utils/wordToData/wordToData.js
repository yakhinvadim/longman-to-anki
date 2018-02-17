import * as R from 'ramda'
import { unescape } from 'he'
import composeQuery from '../composeQuery/composeQuery'
import composeWordData from '../../core/composeWordData/composeWordData'
import extractHeadword from '../../core/extractHeadword/extractHeadword'
import {
    fixDoubleWhitespace,
    replaceNewlineWithSpace
} from '../stringNormalizers/stringNormalizers'

const normalizeMarkup = R.pipe(
    unescape,
    fixDoubleWhitespace,
    replaceNewlineWithSpace
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
export default R.memoize(wordToData)
