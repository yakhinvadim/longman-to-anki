const domify = (markup: string) => {
    const wrapper = document.implementation
        .createHTMLDocument()
        .createElement('div')
    wrapper.innerHTML = markup

    return wrapper
}

export default domify
