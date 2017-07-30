import domify from '../../utils/domify/domify'

const extractPronunciation = pageMarkup => {
    const pronunciationWrapper = domify(pageMarkup).querySelector('.PronCodes') // there are several '.PronCodes' on each page, we need the first one

    if (!pronunciationWrapper) {
        return null
    }

    const pronunciation = [
        ...pronunciationWrapper.querySelectorAll('.PRON, .AMEVARPRON')
    ]
        .map(node => node.textContent.trim())
        .join(' ')

    return pronunciation
}

export default extractPronunciation
