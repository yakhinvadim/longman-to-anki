import normalizeWordData from './normalizeWordData'
import { WordData, EntryData } from '../../types.d'
jest.mock(
    '../normalizeEntryData/normalizeEntryData',
    () => (wordData: WordData) => (entryData: EntryData) =>
        `${entryData.senses[0].examples[0]} ${wordData.headword}`
)

const entryData1: EntryData = {
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
        }
    ],
    pronunciation: '',
    partOfSpeech: ''
}

const entryData2: EntryData = {
    senses: [
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
    pronunciation: '',
    partOfSpeech: ''
}

const wordData: WordData = {
    headword: 'headword',
    frequency: '',
    entries: [entryData1, entryData2]
}

describe('normalizeWordData', () => {
    it('correctly normalizes wordData', () => {
        expect(normalizeWordData(wordData)).toEqual([
            'example1 headword',
            'example2 headword'
        ])
    })
})
