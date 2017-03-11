import React from 'react';
import Totals from './Totals';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
	shallow(<Totals />);
});
