import normalizeWordData from './normalizeWordData'
jest.mock(
    '../normalizeEntryData/normalizeEntryData',
    () => ({ headword, pronunciation, frequency }) => entryData =>
        `${entryData} ${headword} ${pronunciation} ${frequency}`
)

describe('normalizeWordData', () => {
    it('correctly normalizes wordData', () => {
        const wordData = {
            headword: 'headword',
            pronunciation: 'pronunciation',
            frequency: 'frequency',
            entries: ['entry1', 'entry2']
        }

        expect(normalizeWordData(wordData)).toEqual([
            'entry1 headword pronunciation frequency',
            'entry2 headword pronunciation frequency'
        ])
    })
})
