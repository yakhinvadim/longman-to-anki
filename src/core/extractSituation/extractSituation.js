import domify from '../../utils/domify/domify'

const extractSituation = senseMarkup => {
    const elements = [...domify(senseMarkup).querySelectorAll('.REGISTERLAB')]

    const situation = elements
        .map(element => element.textContent.trim())
        .join(' ')

    return situation
}

export default extractSituation
