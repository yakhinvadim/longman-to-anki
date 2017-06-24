import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import TextField from 'material-ui/TextField'

export default class DeckName extends PureComponent {
    static propTypes = {
        onChange: PropTypes.func,
        value: PropTypes.string
    }

    static defaultProps = {
        onChange: () => {},
        value: ''
    }

    render() {
        const { onChange, value } = this.props

        return (
            <TextField
                floatingLabelText="Deck name"
                value={value}
                onChange={onChange}
                fullWidth
            />
        )
    }
}
