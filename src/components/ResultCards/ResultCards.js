import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import Paper from 'material-ui/Paper'
import './ResultCards.css'

export default class ResultCards extends PureComponent {
    static propTypes = {
        value: PropTypes.string
    }

    static defaultProps = {
        value: ''
    }

    render() {
        return (
            <Paper className="result-cards" zDepth={1}>
                {this.props.value}
            </Paper>
        )
    }
}
