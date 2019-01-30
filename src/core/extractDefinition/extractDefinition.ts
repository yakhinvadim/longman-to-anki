import * as R from 'ramda'
import splitBySelector from '../../utils/splitBySelector/splitBySelector'
import domify from '../../utils/domify/domify'
import getTrimmedTextContent from '../../utils/getTrimmedTextContent/getTrimmedTextContent'

const extractDefinition = (senseMarkup: string) => {
    const definitionNodeMarkup = splitBySelector({
        selector: '.DEF',
        onlyChildren: true
    })(senseMarkup)[0]

    if (!definitionNodeMarkup) {
        return ''
    }

    const definition = R.pipe(
        domify,
        getTrimmedTextContent
    )(definitionNodeMarkup)

    return definition
}

export default extractDefinition
