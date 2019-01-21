import wordToData, { normalizeMarkup } from './wordToData'
import fetchMock from 'fetch-mock'
import asdfasdfMarkup from '../../mocks/wordAsdfasdf'
import setMarkup from '../../mocks/wordSet'
import composeQuery from '../composeQuery/composeQuery'

jest.mock('../../core/composeWordData/composeWordData', () => jest.fn(a => a))

fetchMock.get(composeQuery('set'), setMarkup)
fetchMock.get(composeQuery('asdfasdf'), asdfasdfMarkup)

describe('wordToData', () => {
    it('returns null for non-existent word', () => {
        return wordToData('asdfasdf').then(data => {
            expect(data).toEqual({ status: 'word not found', payload: null })
        })
    })

    it('returns correct data for real word', () => {
        return wordToData('set').then(data => {
            expect(data).toEqual({
                status: 'ok',
                payload: normalizeMarkup(setMarkup)
            })
        })
    })
})
