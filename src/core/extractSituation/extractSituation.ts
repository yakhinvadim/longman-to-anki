import domify from '../../utils/domify/domify'
import getTrimmedTextContent from '../../utils/getTrimmedTextContent/getTrimmedTextContent'

const extractSituation = (senseMarkup: string) => {
    const situation = Array.from(
        domify(senseMarkup).querySelectorAll('.REGISTERLAB')
    )
        .map(getTrimmedTextContent)
        .join(' ')

    return situation
}

export default extractSituation
