import domify from '../../utils/domify/domify'

const extractAntonym = exampleGroupMarkup => {
    const antonym = [
        ...domify(exampleGroupMarkup).querySelectorAll(
            '.PROPFORM, .PROPFORMPREP, .COLLO, .LINKWORD, .LEXUNIT' // all kinds of form classes
        )
    ]
        .map(node => node.textContent.trim())
        .join(' ')

    return antonym
}

export default extractAntonym
