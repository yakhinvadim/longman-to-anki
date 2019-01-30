import domify from '../../utils/domify/domify'
import getTrimmedTextContent from '../../utils/getTrimmedTextContent/getTrimmedTextContent'

const formClasses = '.PROPFORM, .PROPFORMPREP, .COLLO, .LINKWORD, .LEXUNIT'

const extractAntonym = (exampleGroupMarkup: string) => {
    const antonym = Array.from(
        domify(exampleGroupMarkup).querySelectorAll(formClasses)
    )
        .map(getTrimmedTextContent)
        .join(' ')

    return antonym
}

export default extractAntonym
