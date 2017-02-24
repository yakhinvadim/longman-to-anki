import React, { PureComponent } from 'react';
import importOptionsImg from './ImportOptions.png';
import './ImportOptions.css';

const importOptionsAlt = `
  Import options:
  Fiels separated by: '#',
  Ignore lines where first field matches existing note,
  Allow HTML in fields
`;

export default class ImportOptions extends PureComponent {
    render() {
        return (
            <div className='import-options'>
                Set import options as on the sample
                <img
                    className='import-options__image'
                    alt={importOptionsAlt}
                    src={importOptionsImg}
                />
            </div>
        );
    }
}
