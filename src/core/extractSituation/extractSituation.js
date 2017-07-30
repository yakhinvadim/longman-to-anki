import domify from '../../utils/domify/domify'

const extractSituation = senseMarkup => {
    const situation = [...domify(senseMarkup).querySelectorAll('.REGISTERLAB')]
        .map(node => node.textContent.trim())
        .join(' ')

    return situation
}

export default extractSituation
