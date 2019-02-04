import React from 'react'
import UserWords from './UserWords'
import Enzyme from 'enzyme'

it('renders without crashing', () => {
    Enzyme.shallow(
        <UserWords onChange={() => {}} value="" onKeyDown={() => {}} />
    )
})
