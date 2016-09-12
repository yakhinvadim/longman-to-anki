import React from 'react';
import ReactDOM from 'react-dom';
import InputWords from './InputWords';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InputWords />, div);
});
