const getTrimmedTextContent = (element: Element | null) => {
    if (!element || !element.textContent) {
        return ''
    }

    return element.textContent.trim()
}

export default getTrimmedTextContent
