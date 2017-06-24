import React from 'react'
import DeckName from './DeckName'
import { shallow } from 'enzyme'

it('renders without crashing', () => {
    shallow(<DeckName />)
})
