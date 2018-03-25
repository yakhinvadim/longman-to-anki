import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import Button from 'material-ui/Button'

export default class DownloadButton extends PureComponent {
	static propTypes = {
		onClick: PropTypes.func.isRequired,
		disabled: PropTypes.bool.isRequired
	}

	render() {
		return (
			<Button
				variant="raised"
				onClick={this.props.onClick}
				disabled={this.props.disabled}
				color="primary"
			>
				Download anki deck
			</Button>
		)
	}
}
