import React, { PureComponent } from 'react'
import TextField from '@material-ui/core/TextField'

interface Props {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: string
}

export default class DeckName extends PureComponent<Props> {
    render() {
        const { onChange, value } = this.props

        return (
            <TextField
                id="deck-name"
                label="Deck name"
                helperText="You can add “::” to create a nested deck. For example: English::Words"
                variant="outlined"
                value={value}
                onChange={onChange}
                fullWidth
            />
        )
    }
}
