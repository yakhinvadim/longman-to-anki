import assertUnreacheble from './assertUnreachable'

describe('assertUnreacheble', () => {
    it('throws Error', () => {
        let x: never
        expect(() => assertUnreacheble(x)).toThrow()
    })
})
