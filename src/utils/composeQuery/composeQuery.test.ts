import composeQuery from './composeQuery'

const path =
    'https://murmuring-tor-18986.herokuapp.com/https://www.ldoceonline.com/dictionary/'
const makeUrl = (word: string) => `${path}${word}`

describe('composeQuery', () => {
    it('composes correct query one simple word', () => {
        expect(composeQuery('set')).toEqual(makeUrl('set'))
    })

    it('composes correct query for word with space', () => {
        expect(composeQuery('fire alarm')).toEqual(makeUrl('fire-alarm'))
    })

    it('composes correct query for word with slash', () => {
        expect(composeQuery('put/set pen to paper')).toEqual(
            makeUrl('put-set-pen-to-paper')
        )
    })

    it('composes correct query for word with apostrophe', () => {
        expect(composeQuery('set somebody’s teeth on edge')).toEqual(
            makeUrl('set-somebody-s-teeth-on-edge')
        )
    })

    it('composes correct query for word with exclamation mark', () => {
        expect(composeQuery('that does it!')).toEqual(makeUrl('that-does-it'))
    })

    it('composes correct query for word with question mark', () => {
        expect(composeQuery('what can I do you for?')).toEqual(
            makeUrl('what-can-i-do-you-for')
        )
    })

    it('composes correct query for word with parenthesis', () => {
        expect(composeQuery('a closed set (of something)')).toEqual(
            makeUrl('a-closed-set-of-something')
        )
    })

    it('composes correct query for word with uppercase symbols', () => {
        expect(composeQuery('catch/get some Z’s')).toEqual(
            makeUrl('catch-get-some-z-s')
        )
    })

    it('composes correct query for word with dots, double spaces and spaces in the end after removing symbols', () => {
        expect(composeQuery('not ... but rather ...')).toEqual(
            makeUrl('not-but-rather')
        )
    })

    it('composes correct query for word with commas', () => {
        expect(composeQuery('I don’t want to sound/be ..., but ...')).toEqual(
            makeUrl('i-don-t-want-to-sound-be-but')
        )
    })
})
