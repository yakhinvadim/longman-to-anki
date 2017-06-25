import domify from '../../utils/domify/domify'

const extractPronunciation = pageMarkup => {
    const pronunciationWrapper = domify(pageMarkup).querySelector('.PronCodes')

    const pronunciation = [
        ...pronunciationWrapper.querySelectorAll('.PRON, .AMEVARPRON')
    ]
        .map(element => element.textContent.trim())
        .join(' ')

    return pronunciation
}

export default extractPronunciation
