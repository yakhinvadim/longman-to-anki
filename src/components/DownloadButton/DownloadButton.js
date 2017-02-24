import React, { PropTypes, PureComponent } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class DownloadButton extends PureComponent {
    static propTypes = {
        fileContent: PropTypes.string,
        fileName: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
        disabled: PropTypes.bool.isRequired
    }

    render() {
        const {
            fileContent,
            fileName,
            onClick,
            disabled
        } = this.props;

        return (
            <RaisedButton
                label="Download cards"
                href={`data:text/plain;charset=utf-8,${fileContent}`}
                download={fileName}
                onClick={onClick}
                disabled={disabled}
                primary
                buttonStyle={{verticalAlign: 'initial'}}
            />
        );
    }
}

