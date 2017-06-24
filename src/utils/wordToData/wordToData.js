import R from 'ramda'
import { unescape } from 'he'
import composeQuery from '../composeQuery/composeQuery'
import composeWordData from '../../core/composeWordData/composeWordData'
import normalizeWordData from '../../core/normalizeWordData/normalizeWordData'

const removeNewLines = R.replace(/\n/gm, '')
const removeDoubleSpace = R.replace(/ {2}/gm, '')

const wordToData = R.memoize(async word => {
    const query = composeQuery(word)
    const escapedMarkup = await fetch(query).then(response => response.text())

    const wordData = R.pipe(
        unescape,
        removeDoubleSpace,
        removeNewLines,
        composeWordData,
        normalizeWordData
    )(escapedMarkup)

    return wordData
})

export default wordToData
