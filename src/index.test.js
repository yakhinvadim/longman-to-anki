document.body.innerHTML = '<div id="root"></div>'

describe('index.js', () => {
    it('does not throw', () => {
        require('./index.tsx')
    })
})

export default undefined
