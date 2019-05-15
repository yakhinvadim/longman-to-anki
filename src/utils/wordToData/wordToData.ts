import * as R from 'ramda'
import composeQuery from '../composeQuery/composeQuery'
import composeWordData from '../../core/composeWordData/composeWordData'
import extractHeadword from '../../core/extractHeadword/extractHeadword'
import { WordFetchError } from '../../types.d'

const removeDoubleSpace = R.replace(/ {2}/gm, ' ')
const removeNewLines = R.replace(/\n/gm, ' ')
const normalizeMarkup = R.pipe(
    removeNewLines,
    removeDoubleSpace
)

const wordNotFound = (markup: string) => extractHeadword(markup) === ''

const wordToData = async (word: string) => {
    let escapedMarkup

    try {
        const query = composeQuery(word)
        escapedMarkup = await fetch(query).then(response => response.text())
    } catch (error) {
        return { status: WordFetchError.Offline }
    }

    const markup = normalizeMarkup(escapedMarkup)

    if (wordNotFound(markup)) {
        return { status: WordFetchError.NotFound }
    } else {
        const wordData = composeWordData(markup)
        return { payload: wordData }
    }
}

export { normalizeMarkup }
export default wordToData
