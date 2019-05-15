import domify from '../../utils/domify/domify'
import getTrimmedTextContent from '../../utils/getTrimmedTextContent/getTrimmedTextContent'

const extractPartOfSpeech = (entryMarkup: string) => {
    const partOfSpeechWrapper = domify(entryMarkup).querySelector('.POS')

    if (!partOfSpeechWrapper) {
        return ''
    }

    const partOfSpeech = getTrimmedTextContent(partOfSpeechWrapper)

    return partOfSpeech
}

export default extractPartOfSpeech
