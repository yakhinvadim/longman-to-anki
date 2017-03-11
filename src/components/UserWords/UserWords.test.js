import React from 'react';
import UserWords from './UserWords';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
	shallow(<UserWords />);
});
