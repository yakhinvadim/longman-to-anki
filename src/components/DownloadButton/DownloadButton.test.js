import React from 'react'
import DownloadButton from './DownloadButton'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
    Enzyme.shallow(<DownloadButton onClick={() => {}} />)
})
