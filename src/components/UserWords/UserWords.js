import React, { PropTypes, PureComponent } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class UserWords extends PureComponent {
    static propTypes = {
        onChange:PropTypes.func.isRequired,
        onSubmit: PropTypes.func.isRequired,
        value: PropTypes.string
    }

    render() {
        const {
            onChange,
            onSubmit,
            value
        } = this.props;

        return (
            <form
                onSubmit={onSubmit}
                style={{marginBottom: 20}}
            >
                <TextField
                    hintText="example, bear, mouse"
                    floatingLabelText="Type some words, you want to learn"
                    value={value}
                    onChange={onChange}
                    fullWidth
                />
                <RaisedButton
                    label="Compose cards"
                    primary
                    type='submit'
                />
            </form>
        );
    }
}
