import domify from '../../utils/domify/domify'
import getTrimmedTextContent from '../../utils/getTrimmedTextContent/getTrimmedTextContent'

const extractGeography = (senseMarkup: string) => {
    const geographyNode = domify(senseMarkup).querySelector('.GEO')

    const geography = getTrimmedTextContent(geographyNode)

    return geography
}

export default extractGeography
