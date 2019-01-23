import * as R from 'ramda'
import domify from '../../utils/domify/domify'

const notBadgeNode = (node: Element) =>
    !(node.classList && node.classList.contains('synopp')) // badge with text "SYN" or "OPP"

const extractSynonymOrAntonym = (whatToExtract: string) => (
    senseMarkup: string
) => {
    const synonymOrAntonymWrapper = domify(senseMarkup).querySelector(
        whatToExtract === 'synonym' ? '.SYN' : '.OPP'
    )

    if (!synonymOrAntonymWrapper) {
        return ''
    }

    const synonymOrAntonym = Array.from(synonymOrAntonymWrapper.children)
        .filter(notBadgeNode)
        .map(R.prop('textContent'))
        .join(' ')
        .trim()

    return synonymOrAntonym
}

export const extractSynonym = extractSynonymOrAntonym('synonym')
export const extractAntonym = extractSynonymOrAntonym('antonym')
