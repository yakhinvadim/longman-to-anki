import React from 'react'
import DownloadSection from './DownloadSection'
import Enzyme from 'enzyme'

it('renders without crashing', () => {
    Enzyme.shallow(
        <DownloadSection
            onClick={() => {}}
            disabled
            isLoading={false}
            totals="some text"
        />
    )
})
