import { extractSynonym, extractAntonym } from './extractSynonymOrAntonym'
import senseWithSynonymMarkup from '../../mocks/wordSet-entry2-sense10'
import senseWithoutSynonymMarkup from '../../mocks/wordSet-entry2-sense9'
import senseWithAntonymMarkup from '../../mocks/wordSet-entry1-sense11'
import senseWithoutAntonymMarkup from '../../mocks/wordSet-entry2-sense9'

describe('extractSynonym', () => {
    it('extracts correct synonym for sense with synonym', () => {
        expect(extractSynonym(senseWithSynonymMarkup)).toEqual('stream')
    })

    it('extracts correct synonym for sense without synonym', () => {
        expect(extractSynonym(senseWithoutSynonymMarkup)).toEqual('')
    })
})

describe('extractAntonym', () => {
    it('extracts correct antonym for sense with one antonym', () => {
        expect(extractAntonym(senseWithAntonymMarkup)).toEqual('rise')
    })

    it('extracts correct antonym for sense without antonym', () => {
        expect(extractAntonym(senseWithoutAntonymMarkup)).toEqual('')
    })
})
