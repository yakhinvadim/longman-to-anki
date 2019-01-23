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

const isNotWordPage = (markup: string) => extractHeadword(markup) === ''

const wordToData = async (word: string) => {
    let escapedMarkup

    try {
        const query = composeQuery(word)
        escapedMarkup = await fetch(query).then(response => response.text())
    } catch (error) {
        return { status: 'offline', payload: null }
    }

    const markup = normalizeMarkup(escapedMarkup, undefined)

    if (isNotWordPage(markup)) {
        return { status: 'word not found', payload: null }
    }

    const wordData = composeWordData(markup)

    return { status: 'ok', payload: wordData }
}

export { normalizeMarkup }
export default wordToData
