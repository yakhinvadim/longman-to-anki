import React, { PureComponent } from 'react'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload'
import CloudOff from '@material-ui/icons/CloudOff'
import { withStyles, WithStyles, Theme, createStyles } from '@material-ui/core'
import { Detector } from 'react-detect-offline'
import maybePluralize from '../../utils/maybePluralize/maybePluralize'
import Grid from '@material-ui/core/Grid'

const styles = (theme: Theme) =>
    createStyles({
        totals: {
            lineHeight: '36px'
        },
        leftIcon: {
            marginRight: theme.spacing(1)
        }
    })

interface Props extends WithStyles<typeof styles> {
    onDownloadAnkiButtonClick: (e: React.MouseEvent) => void
    onDownloadCsvButtonClick: (e: React.MouseEvent) => void
    onClearWordsButtonClick: (e: React.MouseEvent) => void
    isLoading: boolean
    wordsCount: number
    cardsCount: number
}

class DownloadSection extends PureComponent<Props> {
    render() {
        const {
            classes,
            onDownloadAnkiButtonClick,
            onDownloadCsvButtonClick,
            onClearWordsButtonClick,
            isLoading,
            wordsCount,
            cardsCount
        } = this.props

        const wordsTotal = maybePluralize(wordsCount, 'word')
        const cardsTotal = maybePluralize(cardsCount, 'card')

        return (
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12}>
                    <div
                        className={classes.totals}
                        data-qa="download-section__totals"
                    >{`${wordsTotal}, ${cardsTotal}`}</div>
                </Grid>

                <Grid item container xs={12} spacing={1} sm={12} md={12}>
                    <Grid item xs={12} sm={4}>
                        <Button
                            variant="outlined"
                            onClick={onClearWordsButtonClick}
                            disabled={!cardsCount}
                            fullWidth
                            color="secondary"
                        >
                            Clear words
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Button
                            variant="outlined"
                            onClick={onDownloadCsvButtonClick}
                            disabled={!cardsCount}
                            fullWidth
                        >
                            Download CSV
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Detector
                            polling={false}
                            render={({ online }: { online: boolean }) => (
                                <Button
                                    variant="contained"
                                    onClick={onDownloadAnkiButtonClick}
                                    disabled={!cardsCount || !online}
                                    color="primary"
                                    fullWidth
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
                                            <CloudOff
                                                className={classes.leftIcon}
                                            />
                                            No internet connection
                                        </>
                                    )}
                                </Button>
                            )}
                        />
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(DownloadSection)
