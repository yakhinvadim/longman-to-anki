import domify from '../../utils/domify/domify'
import getTrimmedTextContent from '../../utils/getTrimmedTextContent/getTrimmedTextContent'

const extractFrequency = (pageMarkup: string) => {
    const frequencyNode = domify(pageMarkup).querySelector('.LEVEL')

    if (!frequencyNode) {
        return '○○○'
    }

    const frequency = getTrimmedTextContent(frequencyNode)

    return frequency
}

export default extractFrequency
