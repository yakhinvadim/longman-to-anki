import domify from '../../utils/domify/domify'

const extractHeadword = pageMarkup => {
    const headword = domify(pageMarkup)
        .querySelector('h1.pagetitle') // I add h1 in selector, because page has two .pagetitle elements, and one of them is span
        .textContent.trim()

    return headword
}

export default extractHeadword
