import splitByWord from './splitByWord'

describe('splitByWord', () => {
    it('splits, removes spaces, drops empty values', () => {
        expect(splitByWord(' hello\n\n world')).toEqual(['hello', 'world'])
    })
})
