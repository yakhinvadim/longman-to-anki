import R from 'ramda'
import domify from '../../utils/domify/domify'

const splitBySelector = ({ selector, onlyChildren = false }, markup) => {
    const rootNode = domify(markup)

    const markups = onlyChildren
        ? [...rootNode.children]
              .filter(node => node.matches(selector))
              .map(node => node.innerHTML)
        : [...rootNode.querySelectorAll(selector)].map(node => node.innerHTML)

    return markups
}

export default R.curry(splitBySelector)
