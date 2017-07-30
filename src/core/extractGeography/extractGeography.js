import domify from '../../utils/domify/domify'

const extractGeography = senseMarkup => {
    const geographyNode = domify(senseMarkup).querySelector('.GEO')

    if (!geographyNode) {
        return ''
    }

    const geography = geographyNode.textContent.trim()

    return geography
}

export default extractGeography
