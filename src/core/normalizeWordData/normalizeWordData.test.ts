import normalizeWordData from './normalizeWordData'
jest.mock(
    '../normalizeEntryData/normalizeEntryData',
    // TODO replace "any" with actual types. wait for this pr to be on create-react-app https://github.com/facebook/jest/pull/7799
    () => (wordData: any) => (entryData: any) =>
        `${entryData.senses[0].examples[0]} ${wordData.headword}`
)

const entryData1 = {
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
    ]
}

const entryData2 = {
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
    ]
}

const wordData = {
    headword: 'headword',
    pronunciation: '',
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
