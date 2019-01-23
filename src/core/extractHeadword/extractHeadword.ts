import domify from '../../utils/domify/domify'
import getTrimmedTextContent from '../../utils/getTrimmedTextContent/getTrimmedTextContent'

const extractHeadword = (pageMarkup: string) => {
    // I'm adding h1 in selector, because page has two .pagetitle elements, and one of them is span
    const headwordNode = domify(pageMarkup).querySelector('h1.pagetitle')

    const headword = getTrimmedTextContent(headwordNode)

    return headword
}

export default extractHeadword
