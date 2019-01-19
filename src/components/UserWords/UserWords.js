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
                label="Type the word, you want to learn"
                placeholder="example"
                helperText="You can enter several words. Type one word per line using 'Shift + Enter' to add new lines"
                variant="outlined"
                fullWidth
                multiline
                rowsMax={20}
                value={value}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
        )
    }
}
