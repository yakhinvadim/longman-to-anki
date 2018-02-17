import {
    fixDoubleWhitespace,
    replaceNewlineWithSpace
} from './stringNormalizers'

describe('stringNormalizers', () => {
    it('fixDoubleWhitespace', () => {
        expect(fixDoubleWhitespace(' one\n\n two\t\nthree\n four')).toEqual(
            ' one two three four'
        )
    })

    it('replaceNewlineWithSpace', () => {
        expect(replaceNewlineWithSpace(' one\n\n two\t\nthree\n four')).toEqual(
            ' one   two\t three  four'
        )
    })
})
