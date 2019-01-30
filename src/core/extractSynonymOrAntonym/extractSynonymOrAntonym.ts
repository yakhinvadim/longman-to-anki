import * as R from 'ramda'
import domify from '../../utils/domify/domify'

// badge with text "SYN" or "OPP"
const isBadgeNode = (node: Node) =>
    node instanceof Element && node.classList.contains('synopp')

const extractSynonymOrAntonym = (whatToExtract: string) => (
    senseMarkup: string
) => {
    const synonymOrAntonymWrapper = domify(senseMarkup).querySelector(
        whatToExtract === 'synonym' ? '.SYN' : '.OPP'
    )

    if (!synonymOrAntonymWrapper) {
        return ''
    }

    const synonymOrAntonym = Array.from(synonymOrAntonymWrapper.childNodes)
        .filter(node => !isBadgeNode(node))
        .map(R.prop('textContent'))
        .join(' ')
        .trim()

    return synonymOrAntonym
}

export const extractSynonym = extractSynonymOrAntonym('synonym')
export const extractAntonym = extractSynonymOrAntonym('antonym')
