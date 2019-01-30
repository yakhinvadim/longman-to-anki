import domify from '../../utils/domify/domify'
import getTrimmedTextContent from '../../utils/getTrimmedTextContent/getTrimmedTextContent'

const extractAntonym = (exampleGroupMarkup: string) => {
    const antonym = Array.from(
        domify(exampleGroupMarkup).querySelectorAll(
            '.PROPFORM, .PROPFORMPREP, .COLLO, .LINKWORD, .LEXUNIT' // all kinds of form classes
        )
    )
        .map(getTrimmedTextContent)
        .join(' ')

    return antonym
}

export default extractAntonym
