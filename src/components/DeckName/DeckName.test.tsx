import React from 'react'
import DeckName from './DeckName'
import Enzyme from 'enzyme'

it('renders without crashing', () => {
    Enzyme.shallow(<DeckName onChange={() => {}} value="test" />)
})
