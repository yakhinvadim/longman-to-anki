import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import TextField from '@material-ui/core/TextField'

export default class DeckName extends PureComponent {
	static propTypes = {
		onChange: PropTypes.func.isRequired,
		value: PropTypes.string
	}

	static defaultProps = {
		value: ''
	}

	render() {
		const { onChange, value } = this.props

		return (
			<TextField
				label="Deck name"
				helperText="You can add “::” to create a nested deck. For example: English::Words"
				variant="outlined"
				value={value}
				onChange={onChange}
				fullWidth
			/>
		)
	}
}
