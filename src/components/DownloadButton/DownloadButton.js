import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

export default class DownloadButton extends PureComponent {
    static propTypes = {
        onClick: PropTypes.func.isRequired,
        disabled: PropTypes.bool.isRequired
    }

    render() {
        return (
            <RaisedButton
                label="Download anki deck"
                onClick={this.props.onClick}
                disabled={this.props.disabled}
                primary
                buttonStyle={{ verticalAlign: 'initial' }}
            />
        )
    }
}
