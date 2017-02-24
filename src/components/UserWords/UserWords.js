import React, { PropTypes, PureComponent } from 'react';
import TextField from 'material-ui/TextField';

export default class UserWords extends PureComponent {
    static propTypes = {
        onChange:PropTypes.func.isRequired,
        value: PropTypes.string
    }

    render() {
        const {
            onChange,
            value
        } = this.props;

        return (
            <TextField
                hintText="example, bear, mouse"
                floatingLabelText="Type some words, you want to learn"
                value={value}
                onChange={onChange}
                fullWidth
                multiLine
                rowsMax={20}
            />
        );
    }
}
