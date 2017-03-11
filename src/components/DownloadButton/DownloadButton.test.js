import React from 'react';
import DownloadButton from './DownloadButton';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
	shallow(<DownloadButton />);
});
