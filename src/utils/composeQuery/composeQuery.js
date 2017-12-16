import * as R from 'ramda'

const someSymbolsDelete = R.replace(/[(!?.,)]/g, '')
const fixDoubleSpaces = R.replace(/ {2}/g, ' ')
const someSymbolsToHyphens = R.replace(/[/ ’]/g, '-')

const composeQuery = word => {
    const escapedWord = R.pipe(
        R.toLower,
        someSymbolsDelete,
        R.trim,
        fixDoubleSpaces,
        someSymbolsToHyphens
    )(word)

    const dictionaryUrl = `http://www.ldoceonline.com/dictionary/${escapedWord}`

    const queryUrl = `https://query.yahooapis.com/v1/public/yql?q=${encodeURIComponent(
        `SELECT * FROM htmlstring WHERE url="${dictionaryUrl}"`
    )}&env=${encodeURIComponent('store://datatables.org/alltableswithkeys')}`

    return queryUrl
}

export default composeQuery
