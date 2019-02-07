import composeEntryData from './composeEntryData'
import entryMarkup from '../../mocks/wordSet-entry1'

describe('composeEntryData', () => {
    it('EntryData contains senses', () => {
        expect(composeEntryData(entryMarkup).senses).toBeDefined()
    })
})
