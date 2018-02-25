import React from 'react'
import WordsListItem from './WordsListItem'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
    Enzyme.shallow(<WordsListItem word="word" onDeleteButtonClick={() => {}} />)
})
