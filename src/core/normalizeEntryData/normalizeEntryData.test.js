import normalizeEntryData from './normalizeEntryData'
jest.mock(
    '../normalizeSenseData/normalizeSenseData',
    () => ({ headword, pronunciation, frequency }) => senseData =>
        `${senseData} ${headword} ${pronunciation} ${frequency}`
)

const headword = 'headword'
const pronunciation = 'pronunciation'
const frequency = 'frequency'

describe('normalizeEntryData', () => {
    it('correctly normalizes entryData', () => {
        const entryData = {
            senses: ['sense1', 'sense2']
        }

        expect(
            normalizeEntryData({ headword, pronunciation, frequency })(
                entryData
            )
        ).toEqual([
            'sense1 headword pronunciation frequency',
            'sense2 headword pronunciation frequency'
        ])
    })
})
