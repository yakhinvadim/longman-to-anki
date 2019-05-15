import composeWordData from './composeWordData'
import wordMarkup from '../../mocks/wordSet'

describe('composeWordData', () => {
    it('wordData contains headword', () => {
        expect(composeWordData(wordMarkup).headword).toBeDefined()
    })

    it('wordData contains entries', () => {
        expect(composeWordData(wordMarkup).entries).toBeDefined()
    })

    it('wordData contains entries', () => {
        expect(composeWordData(wordMarkup).frequency).toBeDefined()
    })
})
