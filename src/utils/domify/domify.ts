const domify = (markup: string) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = markup

    return wrapper
}

export default domify
