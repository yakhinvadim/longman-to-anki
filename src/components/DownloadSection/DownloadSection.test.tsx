import React from 'react'
import DownloadSection from './DownloadSection'
import Enzyme from 'enzyme'

it('renders without crashing', () => {
    Enzyme.shallow(
        <DownloadSection
            onClick={() => {}}
            isLoading={false}
            wordsAndCardsCount={{
                wordsCount: 1,
                cardsCount: 3
            }}
        />
    )
})
