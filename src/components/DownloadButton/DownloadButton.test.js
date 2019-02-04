import React from 'react'
import DownloadButton from './DownloadButton'
import Enzyme from 'enzyme'

it('renders without crashing', () => {
    Enzyme.shallow(<DownloadButton onClick={() => {}} disabled />)
})
