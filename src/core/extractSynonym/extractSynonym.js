import domify from '../../utils/domify/domify'
import R from 'ramda'

const notBadgeNode = node =>
    !(node.classList && node.classList.contains('synopp')) // badge with text "SYN" or "OPP"

const extractSynonym = senseMarkup => {
    const synonymWrapper = domify(senseMarkup).querySelector('.SYN')

    if (!synonymWrapper) {
        return ''
    }

    const synonym = [...synonymWrapper.childNodes]
        .filter(notBadgeNode)
        .map(R.prop('textContent'))
        .join(' ')
        .trim()

    return synonym
}

export default extractSynonym
