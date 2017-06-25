import domify from '../../utils/domify/domify'

const extractAntonym = exampleGroupMarkup => {
    const elements = [
        ...domify(exampleGroupMarkup).querySelectorAll(
            '.PROPFORM, .PROPFORMPREP, .COLLO, .LINKWORD, .LEXUNIT'
        )
    ] // all kinds of form classes

    const antonym = elements
        .map(element => element.textContent.trim())
        .join(' ')

    return antonym
}

export default extractAntonym
