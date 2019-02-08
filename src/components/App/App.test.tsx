import React from 'react'
import { mount, shallow } from 'enzyme'
import App from './App'
import UserWords from '../UserWords/UserWords'
import DeckName from '../DeckName/DeckName'
import DownloadSection from '../DownloadSection/DownloadSection'
import Header from '../Header/Header'
import fetchMock from 'fetch-mock'
import goMarkup from '../../mocks/wordGo'
import setMarkup from '../../mocks/wordSet'
import composeQuery from '../../utils/composeQuery/composeQuery'

fetchMock.get(composeQuery('go'), goMarkup)
fetchMock.get(composeQuery('set'), setMarkup)

describe('<App />', () => {
    it('renders without errors', () => {
        mount(<App />)
    })

    it('contains Header, UserWords, DeckName and DownloadSection', () => {
        const wrapper = shallow(<App />)
        expect(wrapper.find(Header)).toHaveLength(1)
        expect(wrapper.find(UserWords)).toHaveLength(1)
        expect(wrapper.find(DeckName)).toHaveLength(1)
        expect(wrapper.find(DownloadSection)).toHaveLength(1)
    })

    it('shows 1 loading and downloaded word in ResultCards', done => {
        const wrapper = mount(<App />)
        wrapper
            .find('[data-qa="user-words"]')
            .find('textarea')
            .filter('[placeholder="example"]')
            .simulate('change', { target: { value: 'go' } })
            .simulate('submit')

        wrapper.update()

        expect(
            wrapper.find('[data-qa="words-list-item__loading-word"]').text()
        ).toEqual('go')

        // wait for async fetch to return result
        setTimeout(() => {
            wrapper.update()
            expect(
                wrapper.find('[data-qa="words-list-item__fetched-word"]').text()
            ).toEqual('go')

            done()
        }, 0)
    })

    it('handles multiline input, shows several loading and downloaded words in ResultCards, and calculates cards count', done => {
        const wrapper = mount(<App />)
        wrapper
            .find('[data-qa="user-words"]')
            .find('textarea')
            .filter('[placeholder="example"]')
            .simulate('change', { target: { value: 'go\nset' } })
            .simulate('submit')

        wrapper.update()

        expect(
            wrapper
                .find('[data-qa="words-list-item__loading-word"]')
                .map(node => node.text())
        ).toEqual(['go', 'set'])

        // wait for async fetch to return result
        setTimeout(() => {
            wrapper.update()
            expect(
                wrapper
                    .find('[data-qa="words-list-item__fetched-word"]')
                    .map(node => node.text())
            ).toEqual(['go', 'set'])

            expect(
                wrapper.find('[data-qa="download-section__totals"]').text()
            ).toEqual('2 words, 163 cards')

            done()
        }, 0)
    })

    it('deletes word', () => {
        const wrapper = mount(<App />)
        wrapper
            .find('[data-qa="user-words"]')
            .find('textarea')
            .filter('[placeholder="example"]')
            .simulate('change', { target: { value: 'go\nset' } })
            .simulate('submit')

        wrapper.update()

        wrapper
            .find('[data-qa="words-list-item__delete"]')
            .first()
            .simulate('click')

        wrapper.update()

        expect(
            wrapper.find('[data-qa="words-list-item__loading-word"]').text()
        ).toEqual('set')
    })
})
