import domify from '../../utils/domify/domify'

const extractFrequency = pageMarkup => {
    const frequencyNode = domify(pageMarkup).querySelector('.LEVEL')

    if (!frequencyNode) {
        return '○○○'
    }

    const frequency = frequencyNode.textContent.trim()

    return frequency
}

export default extractFrequency
