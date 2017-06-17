import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import TextField from 'material-ui/TextField';

export default class ResultCards extends PureComponent {
	static propTypes = {
		value: PropTypes.string
	};

	static defaultProps = {
		value: ''
	};

	render() {
		return (
			<TextField
				hintText="Text for anki cards will appear here"
				multiLine
				fullWidth
				value={this.props.value}
				rowsMax={10}
				textareaStyle={{ whiteSpace: 'pre' }}
			/>
		);
	}
}
