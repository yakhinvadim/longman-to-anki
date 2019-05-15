import domify from '../domify/domify'

const splitBySelector = ({
    selector,
    onlyChildren = false
}: {
    selector: string
    onlyChildren?: boolean
}) => (markup: string) => {
    const rootNode = domify(markup)

    const markups = onlyChildren
        ? Array.from(rootNode.children)
              .filter(node => node.matches(selector))
              .map(node => node.innerHTML)
        : Array.from(rootNode.querySelectorAll(selector)).map(
              node => node.innerHTML
          )

    return markups
}

export default splitBySelector
