import * as R from 'ramda'
import splitBySelector from '../../utils/splitBySelector/splitBySelector'
import domify from '../../utils/domify/domify'

const getDefinition = R.pipe(
    R.map(
        R.pipe(
            domify,
            R.prop('textContent'),
            R.trim
        )
    ),
    R.head
)

const extractDefinition = senseMarkup => {
    const definition = R.pipe(
        splitBySelector({ selector: '.DEF', onlyChildren: true }),
        R.ifElse(R.isEmpty, R.always(''), getDefinition)
    )(senseMarkup)

    return definition
}

export default extractDefinition
