import domify from '../../utils/domify/domify'
import getTrimmedTextContent from '../../utils/getTrimmedTextContent/getTrimmedTextContent'

const formClasses = '.PROPFORM, .PROPFORMPREP, .COLLO, .LINKWORD, .LEXUNIT'

const extractForm = (exampleGroupMarkup: string) => {
    const form = Array.from(
        domify(exampleGroupMarkup).querySelectorAll(formClasses)
    )
        .map(getTrimmedTextContent)
        .join(' ')

    return form
}

export default extractForm
