import wordToData, { normalizeMarkup } from './wordToData'
import fetchMock from 'fetch-mock'
import asdfasdfMarkup from '../../mocks/wordAsdfasdf'
import setMarkup from '../../mocks/wordSet'
import composeQuery from '../composeQuery/composeQuery'
import { WordFetchError } from '../../types.d'

jest.mock('../../core/composeWordData/composeWordData', () => jest.fn(a => a))

fetchMock.get(composeQuery('set'), setMarkup)
fetchMock.get(composeQuery('asdfasdf'), asdfasdfMarkup)
fetchMock.get(composeQuery('offline-request'), {
    throws: new Error('Failed to fetch')
})

describe('wordToData', () => {
    it('returns correct status for offline request', () => {
        return wordToData('offline-request').then(data => {
            expect(data).toEqual({ status: WordFetchError.Offline })
        })
    })

    it('returns correct status for non-existent word', () => {
        return wordToData('asdfasdf').then(data => {
            expect(data).toEqual({ status: WordFetchError.NotFound })
        })
    })

    it('returns correct data for real word', () => {
        return wordToData('set').then(data => {
            expect(data).toEqual({
                payload: normalizeMarkup(setMarkup)
            })
        })
    })
})
