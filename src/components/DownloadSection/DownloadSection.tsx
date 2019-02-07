import React, { PureComponent } from 'react'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload'
import CloudOff from '@material-ui/icons/CloudOff'
import { withStyles, WithStyles, Theme, createStyles } from '@material-ui/core'
import { Detector } from 'react-detect-offline'
import maybePluralize from '../../utils/maybePluralize/maybePluralize'

const styles = (theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        leftIcon: {
            marginRight: theme.spacing.unit
        }
    })

interface Props extends WithStyles<typeof styles> {
    onClick: (e: React.MouseEvent) => void
    isLoading: boolean
    wordsAndCardsCount: {
        wordsCount: number
        cardsCount: number
    }
}

class DownloadSection extends PureComponent<Props> {
    render() {
        const { classes, onClick, isLoading, wordsAndCardsCount } = this.props

        const wordsTotal = maybePluralize(wordsAndCardsCount.wordsCount, 'word')
        const cardsTotal = maybePluralize(wordsAndCardsCount.cardsCount, 'card')

        return (
            <div className={classes.root}>
                <span>{`${wordsTotal}, ${cardsTotal}`}</span>
                <Detector
                    polling={false}
                    render={({ online }: { online: boolean }) => (
                        <Button
                            variant="contained"
                            onClick={onClick}
                            disabled={!wordsAndCardsCount.cardsCount || !online}
                            color="primary"
                        >
                            {online ? (
                                isLoading ? (
                                    <>
                                        <CircularProgress
                                            className={classes.leftIcon}
                                            color="inherit"
                                            size={24}
                                        />
                                        Preparing your&nbsp;deck
                                    </>
                                ) : (
                                    <>
                                        <CloudDownloadIcon
                                            className={classes.leftIcon}
                                        />
                                        Download anki&nbsp;deck
                                    </>
                                )
                            ) : (
                                <>
                                    <CloudOff className={classes.leftIcon} />
                                    No internet connection
                                </>
                            )}
                        </Button>
                    )}
                />
            </div>
        )
    }
}

export default withStyles(styles)(DownloadSection)
