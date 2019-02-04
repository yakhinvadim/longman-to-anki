import extractFrequency from './extractFrequency'
import highFrequencyWord from '../../mocks/wordGo'
import lowFrequencyWord from '../../mocks/wordOmg'

describe('extractFrequency', () => {
    it('extracts correct frequency for word with frequency node', () => {
        expect(extractFrequency(highFrequencyWord)).toEqual('●●●')
    })

    it('extracts correct frequency for word without frequency node', () => {
        expect(extractFrequency(lowFrequencyWord)).toEqual('○○○')
    })
})
