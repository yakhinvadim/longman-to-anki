import maybePluralize from './maybePluralize'

describe('maybePluralize', () => {
    it('doesnt pluralize if count equals to 1', () => {
        expect(maybePluralize(1, 'word')).toEqual('1 word')
    })

    it('pluralize if count is more than 1', () => {
        expect(maybePluralize(2, 'word')).toEqual('2 words')
    })

    it('correctly pluralize if siffix is passed', () => {
        expect(maybePluralize(2, 'fox', 'es')).toEqual('2 foxes')
    })
})
