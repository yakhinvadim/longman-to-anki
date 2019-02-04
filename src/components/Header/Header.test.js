import React from 'react'
import Header from './Header'
import Enzyme from 'enzyme'

it('renders without crashing', () => {
    Enzyme.shallow(<Header />)
})
