import domify from '../../utils/domify/domify'
import getTrimmedTextContent from '../../utils/getTrimmedTextContent/getTrimmedTextContent'

const extractHeadword = (pageMarkup: string) => {
    // I'm adding h1 in selector, because page has two .pagetitle elements, and one of them is span
    // I'm adding entry_content in order to exclude pagetitle from https://www.ldoceonline.com/dictionary/
    const headwordNode = domify(pageMarkup).querySelector(
        '.entry_content h1.pagetitle'
    )

    const headword = getTrimmedTextContent(headwordNode)

    return headword
}

export default extractHeadword
