import * as R from 'ramda'
import domify from '../../utils/domify/domify'

const notBadgeNode = node =>
    !(node.classList && node.classList.contains('synopp')) // badge with text "SYN" or "OPP"

const extractSynonymOrAntonym = whatToExtract => senseMarkup => {
    const synonymOrAntonymWrapper = domify(senseMarkup).querySelector(
        whatToExtract === 'synonym' ? '.SYN' : '.OPP'
    )

    if (!synonymOrAntonymWrapper) {
        return ''
    }

    const synonymOrAntonym = [...synonymOrAntonymWrapper.childNodes]
        .filter(notBadgeNode)
        .map(R.prop('textContent'))
        .join(' ')
        .trim()

    return synonymOrAntonym
}

export const extractSynonym = extractSynonymOrAntonym('synonym')
export const extractAntonym = extractSynonymOrAntonym('antonym')
