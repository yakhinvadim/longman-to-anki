import React from 'react'
import { mount } from 'enzyme'
import App from './App'

describe('<App />', () => {
    it('renders without errors', () => {
        mount(<App />)
    })
})
