import React from 'react'
import ImportOptions from './ImportOptions'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
    Enzyme.shallow(<ImportOptions />)
})
