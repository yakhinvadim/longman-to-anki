import * as R from 'ramda'

const someSymbolsDelete = R.replace(/[(!?.,)]/g, '')
const fixDoubleSpaces = R.replace(/ {2}/g, ' ')
const someSymbolsToHyphens = R.replace(/[/ ’]/g, '-')

const composeQuery = (word: string) => {
    const escapedWord = R.pipe(
        R.toLower,
        someSymbolsDelete,
        R.trim,
        fixDoubleSpaces,
        someSymbolsToHyphens
    )(word)

    const dictionaryUrl = `https://www.ldoceonline.com/dictionary/${escapedWord}`

    const queryUrl = `https://cors-anywhere.herokuapp.com/${dictionaryUrl}`

    return queryUrl
}

export default composeQuery
