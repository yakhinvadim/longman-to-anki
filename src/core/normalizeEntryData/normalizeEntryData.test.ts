import normalizeEntryData from './normalizeEntryData'
import { SenseData, WordData } from '../../types.d'
jest.mock(
    '../normalizeSenseData/normalizeSenseData',
    // TODO replace "any" with actual types. wait for create-react-app to update to Jest 24.1.0
    () => (wordData: any) => (senseData: any) =>
        `${senseData.examples[0]} ${wordData.headword}`
)

const entryData = {
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
    ]
}

const wordData = {
    headword: 'headword',
    pronunciation: '',
    frequency: '',
    entries: [entryData]
}

describe('normalizeEntryData', () => {
    it('correctly normalizes entryData', () => {
        expect(normalizeEntryData(wordData)(entryData)).toEqual([
            'example1 headword',
            'example2 headword'
        ])
    })
})
