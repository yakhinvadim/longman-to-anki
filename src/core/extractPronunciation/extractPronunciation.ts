import domify from '../../utils/domify/domify'
import getTrimmedTextContent from '../../utils/getTrimmedTextContent/getTrimmedTextContent'

const extractPronunciation = (pageMarkup: string) => {
    const pronunciationWrapper = domify(pageMarkup).querySelector('.PronCodes') // there are several '.PronCodes' on each page, we need the first one

    if (!pronunciationWrapper) {
        return null
    }

    const pronunciation = Array.from(
        pronunciationWrapper.querySelectorAll('.PRON, .AMEVARPRON')
    )
        .map(getTrimmedTextContent)
        .join(' ')

    return pronunciation
}

export default extractPronunciation
