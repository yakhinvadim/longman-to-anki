import * as R from 'ramda'
import domify from '../../utils/domify/domify'
import splitBySelector from '../../utils/splitBySelector/splitBySelector'
import {
    fixDoubleWhitespace,
    replaceNewlineWithSpace
} from '../../utils/stringNormalizers/stringNormalizers'

const removeGlossary = R.replace(/\(=.*\)/g, '')
const fixNbsp = R.replace(/&nbsp;/g, ' ')
const fixSeparatedPeriod = R.replace(/ \./g, '.')

const cleanse = R.pipe(
    removeGlossary,
    replaceNewlineWithSpace,
    fixNbsp,
    fixDoubleWhitespace,
    fixSeparatedPeriod,
    R.trim
)

const extractExamples = senseOrExampleGroupMarkup => {
    const examples = R.pipe(
        splitBySelector({ selector: '.EXAMPLE', onlyChildren: true }),
        R.map(R.pipe(domify, R.prop('textContent'), cleanse))
    )(senseOrExampleGroupMarkup)

    return examples
}

export default extractExamples
