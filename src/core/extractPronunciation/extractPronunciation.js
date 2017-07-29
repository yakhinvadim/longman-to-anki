import domify from '../../utils/domify/domify'

const extractPronunciation = pageMarkup => {
    const pronunciation = [
        ...domify(pageMarkup)
            .querySelector('.PronCodes')
            .querySelectorAll('.PRON, .AMEVARPRON')
    ]
        .map(element => element.textContent.trim())
        .join(' ')

    return pronunciation
}

export default extractPronunciation
