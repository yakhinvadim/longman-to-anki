import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload'
import CloudOff from '@material-ui/icons/CloudOff'
import { withStyles } from '@material-ui/core'

class DownloadButton extends PureComponent<any, any> {
    static propTypes = {
        onClick: PropTypes.func.isRequired,
        disabled: PropTypes.bool.isRequired,
        isLoading: PropTypes.bool.isRequired,
        classes: PropTypes.object.isRequired,
        isOnline: PropTypes.bool.isRequired
    }

    render() {
        return (
            <Button
                variant="contained"
                onClick={this.props.onClick}
                disabled={this.props.disabled || !this.props.isOnline}
                color="primary"
            >
                {this.props.isOnline ? (
                    this.props.isLoading ? (
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
                    )
                ) : (
                    <>
                        <CloudOff className={this.props.classes.leftIcon} />
                        No internet connection
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
