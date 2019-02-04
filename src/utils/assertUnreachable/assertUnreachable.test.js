import assertUnreacheble from './assertUnreachable'

describe('assertUnreacheble', () => {
    it('throws Error', () => {
        expect(() => assertUnreacheble()).toThrow()
    })
})
