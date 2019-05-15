import extractPartOfSpeech from './extractPartOfSpeech'
import verbEntryMarkup from '../../mocks/wordSet-entry1'
import nounEntryMarkup from '../../mocks/wordSet-entry2'
import abbreviationEntryMarkup from '../../mocks/wordOmg-entry1'

describe('extractPronunciation', () => {
    it('extracts correct part of speech for verb', () => {
        expect(extractPartOfSpeech(verbEntryMarkup)).toEqual('verb')
    })

    it('extracts correct part of speech for noun', () => {
        expect(extractPartOfSpeech(nounEntryMarkup)).toEqual('noun')
    })

    it('returns empty string if there is no part of speech', () => {
        expect(extractPartOfSpeech(abbreviationEntryMarkup)).toEqual('')
    })
})
