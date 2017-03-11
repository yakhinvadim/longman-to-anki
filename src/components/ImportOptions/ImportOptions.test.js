import React from 'react';
import ImportOptions from './ImportOptions';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
	shallow(<ImportOptions />);
});
