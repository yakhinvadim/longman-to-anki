const domify = str => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = str

    return wrapper
}

export default domify
