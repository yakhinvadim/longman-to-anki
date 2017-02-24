import React, { PropTypes, PureComponent } from 'react';
import TextField from 'material-ui/TextField';

export default class ResultCards extends PureComponent {
    static propTypes = {
        value: PropTypes.string
    }

    render() {
        return (
            <TextField
                hintText="Text for anki cards will appear here"
                multiLine
                fullWidth
                value={this.props.value}
                rowsMax={10}
            />
        );
    }
}
