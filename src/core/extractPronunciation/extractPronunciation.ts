import domify from '../../utils/domify/domify'
import getTrimmedTextContent from '../../utils/getTrimmedTextContent/getTrimmedTextContent'

const extractPronunciation = (entryMarkup: string) => {
    const pronunciationWrapper = domify(entryMarkup).querySelector('.PronCodes')

    if (!pronunciationWrapper) {
        return ''
    }

    const pronunciation = Array.from(
        pronunciationWrapper.querySelectorAll('.PRON, .AMEVARPRON')
    )
        .map(getTrimmedTextContent)
        .join(' ')

    return pronunciation
}

export default extractPronunciation
