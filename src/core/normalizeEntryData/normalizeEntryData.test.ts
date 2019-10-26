import normalizeEntryData from './normalizeEntryData'
import { SenseData, WordData, EntryData } from '../../types.d'
jest.mock(
    '../normalizeSenseData/normalizeSenseData',
    () => ({
        wordData,
        entryData
    }: {
        wordData: WordData
        entryData: EntryData
    }) => (senseData: SenseData) =>
        `${senseData.examples[0]} ${wordData.headword} ${entryData.pronunciation}`
)

const entryData: EntryData = {
    senses: [
        {
            definition: '',
            situation: '',
            geography: '',
            synonym: '',
            antonym: '',
            examples: ['example1'],
            exampleGroups: [],
            subsenses: []
        },
        {
            definition: '',
            situation: '',
            geography: '',
            synonym: '',
            antonym: '',
            examples: ['example2'],
            exampleGroups: [],
            subsenses: []
        }
    ],
    pronunciation: 'pronunciation',
    partOfSpeech: ''
}

const wordData: WordData = {
    headword: 'headword',
    frequency: '',
    entries: [entryData]
}

describe('normalizeEntryData', () => {
    it('correctly normalizes entryData', () => {
        expect(normalizeEntryData(wordData)(entryData)).toEqual([
            'example1 headword pronunciation',
            'example2 headword pronunciation'
        ])
    })
})
