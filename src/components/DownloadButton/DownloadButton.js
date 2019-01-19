import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload'
import { withStyles } from '@material-ui/core'

class DownloadButton extends PureComponent {
    static propTypes = {
        onClick: PropTypes.func.isRequired,
        disabled: PropTypes.bool.isRequired,
        isLoading: PropTypes.bool.isRequired,
        classes: PropTypes.object.isRequired
    }

    render() {
        return (
            <Button
                variant="contained"
                onClick={this.props.onClick}
                disabled={this.props.disabled}
                color="primary"
            >
                {this.props.isLoading ? (
                    <>
                        <CircularProgress
                            className={this.props.classes.leftIcon}
                            color="inherit"
                            size={24}
                        />
                        Preparing your&nbsp;deck
                    </>
                ) : (
                    <>
                        <CloudDownloadIcon
                            className={this.props.classes.leftIcon}
                        />
                        Download anki&nbsp;deck
                    </>
                )}
            </Button>
        )
    }
}

export default withStyles(theme => ({
    leftIcon: {
        marginRight: theme.spacing.unit
    }
}))(DownloadButton)
