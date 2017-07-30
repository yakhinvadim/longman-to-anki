import domify from '../../utils/domify/domify'

const extractHeadword = pageMarkup => {
    const headwordNode = domify(pageMarkup).querySelector('h1.pagetitle') // I'm adding h1 in selector, because page has two .pagetitle elements, and one of them is span

    if (!headwordNode) {
        return null
    }

    const headword = headwordNode.textContent.trim()

    return headword
}

export default extractHeadword
