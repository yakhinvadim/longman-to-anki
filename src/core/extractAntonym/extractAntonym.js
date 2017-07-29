import domify from '../../utils/domify/domify'

const notBadgeNode = node =>
    !(node.classList && node.classList.contains('synopp')) // badge with text "SYN" or "OPP"

const extractAntonym = senseMarkup => {
    const antonymWrapper = domify(senseMarkup).querySelector('.OPP') // opposite

    if (!antonymWrapper) {
        return ''
    }

    const antonym = [...antonymWrapper.childNodes]
        .filter(notBadgeNode)
        .map(child => child.textContent)
        .join(' ')
        .trim()

    return antonym
}

export default extractAntonym
