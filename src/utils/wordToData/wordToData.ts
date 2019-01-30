import * as R from 'ramda'
import { unescape } from 'he'
import composeQuery from '../composeQuery/composeQuery'
import composeWordData from '../../core/composeWordData/composeWordData'
import extractHeadword from '../../core/extractHeadword/extractHeadword'
import { WordFetchStatus } from '../../types.d'

const removeDoubleSpace = R.replace(/ {2}/gm, '')
const removeNewLines = R.replace(/\n/gm, '')
const normalizeMarkup = R.pipe(
    unescape,
    removeDoubleSpace,
    removeNewLines
)

const wordNotFound = (markup: string) => extractHeadword(markup) === ''

const wordToData = async (word: string) => {
    let escapedMarkup

    try {
        const query = composeQuery(word)
        escapedMarkup = await fetch(query).then(response => response.text())
    } catch (error) {
        return { status: WordFetchStatus.Offline }
    }

    const markup = normalizeMarkup(escapedMarkup, undefined)

    if (wordNotFound(markup)) {
        return { status: WordFetchStatus.NotFound }
    } else {
        const wordData = composeWordData(markup)
        return { status: WordFetchStatus.Ok, payload: wordData }
    }
}

export { normalizeMarkup }
export default wordToData
