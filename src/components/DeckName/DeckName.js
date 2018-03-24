import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import TextField from 'material-ui-next/TextField'

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
				value={value}
				onChange={onChange}
				fullWidth
			/>
		)
	}
}
