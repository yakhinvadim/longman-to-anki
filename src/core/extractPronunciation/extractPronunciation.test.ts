import extractPronunciation from './extractPronunciation'
import simpleWordMarkup from '../../mocks/wordSet'
import irregularVerbMarkup from '../../mocks/wordGo'
import irregularNounMarkup from '../../mocks/wordMouse'
import wordWithNoPronunciationMarkup from '../../mocks/wordOmg'

describe('extractPronunciation', () => {
    it('extracts correct pronunciation for ordinary word', () => {
        expect(extractPronunciation(simpleWordMarkup)).toEqual('set')
    })

    it('extracts correct pronunciation for irregular verb and american pronounciation', () => {
        expect(extractPronunciation(irregularVerbMarkup)).toEqual('ɡəʊ $ ɡoʊ')
    })

    it('extracts correct pronunciation for irregular plural noun', () => {
        expect(extractPronunciation(irregularNounMarkup)).toEqual('maʊs')
    })

    it('returns empty string if there is no pronunciation', () => {
        expect(extractPronunciation(wordWithNoPronunciationMarkup)).toEqual('')
    })
})
