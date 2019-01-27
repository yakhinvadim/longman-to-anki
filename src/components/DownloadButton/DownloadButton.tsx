import React, { PureComponent } from 'react'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload'
import CloudOff from '@material-ui/icons/CloudOff'
import { withStyles, WithStyles, Theme, createStyles } from '@material-ui/core'

const styles = (theme: Theme) =>
    createStyles({
        leftIcon: {
            marginRight: theme.spacing.unit
        }
    })

interface Props extends WithStyles<typeof styles> {
    onClick: (e: React.MouseEvent) => void
    disabled: boolean
    isLoading: boolean
    isOnline: boolean
}

class DownloadButton extends PureComponent<Props> {
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

export default withStyles(styles)(DownloadButton)
