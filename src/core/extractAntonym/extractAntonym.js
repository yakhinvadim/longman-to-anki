import domify from '../../utils/domify/domify'

const extractAntonym = senseMarkup => {
    const wrapper = domify(senseMarkup).querySelector('.OPP') // opposite

    const antonym = wrapper
        ? [...wrapper.childNodes]
              .filter(
                  child =>
                      !child.classList || !child.classList.contains('synopp')
              ) // element with text "SYN" or "OPP"
              .map(child => child.textContent)
              .join(' ')
              .trim()
        : ''

    return antonym
}

export default extractAntonym
