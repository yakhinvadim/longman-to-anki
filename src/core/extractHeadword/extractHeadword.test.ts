import extractHeadword from './extractHeadword'
import wordMarkup from '../../mocks/wordSet'

describe('extractHeadword', () => {
    it('extracts correct headword', () => {
        expect(extractHeadword(wordMarkup)).toEqual('set')
    })

    it('returns empty string, if headword is not found', () => {
        expect(extractHeadword('<div>no headword here</div>')).toEqual('')
    })
})
