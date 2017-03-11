import React from 'react';
import ResultCards from './ResultCards';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
	shallow(<ResultCards />);
});
