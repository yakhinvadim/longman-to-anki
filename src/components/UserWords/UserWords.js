import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import TextField from '@material-ui/core/TextField'

export default class UserWords extends PureComponent {
	static propTypes = {
		onChange: PropTypes.func.isRequired,
		value: PropTypes.string.isRequired,
		onKeyDown: PropTypes.func.isRequired
	}

	render() {
		const { onChange, value, onKeyDown } = this.props

		return (
			<TextField
				label="Type some words, you want to learn"
				placeholder="example&#10;bear&#10;fire alarm"
				fullWidth
				multiline
				rows={3}
				rowsMax={20}
				value={value}
				onChange={onChange}
				onKeyDown={onKeyDown}
			/>
		)
	}
}
