import extractSituation from './extractSituation'
import senseWithSituationMarkup from '../../mocks/wordSet-entry2-sense9'
import senseWithoutSituationMarkup from '../../mocks/wordSet-entry2-sense10'
import senseWithTwoSituationsMarkup from '../../mocks/wordDitch-entry2-sense3'

describe('extractSituation', () => {
    it('extracts correct situation for sense with one situation', () => {
        expect(extractSituation(senseWithSituationMarkup)).toEqual('technical')
    })

    it('extracts correct situation for sense with two situations', () => {
        expect(extractSituation(senseWithTwoSituationsMarkup)).toEqual(
            'spoken informal'
        )
    })

    it('extracts correct situation for sense without situation', () => {
        expect(extractSituation(senseWithoutSituationMarkup)).toEqual('')
    })
})
