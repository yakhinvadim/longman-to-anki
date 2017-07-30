import domify from '../../utils/domify/domify'

const extractPronunciation = pageMarkup => {
    const pronunciation = [
        ...domify(pageMarkup)
            .querySelector('.PronCodes') // there are several .PronCodes on each page, we need the first one
            .querySelectorAll('.PRON, .AMEVARPRON')
    ]
        .map(node => node.textContent.trim())
        .join(' ')

    return pronunciation
}

export default extractPronunciation
