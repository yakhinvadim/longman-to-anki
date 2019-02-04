import React, { PureComponent } from 'react'
import TextField from '@material-ui/core/TextField'

interface Props {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onKeyDown: (e: React.KeyboardEvent) => void
    onSubmit: (e: React.FormEvent) => void
    value: string
}
export default class UserWords extends PureComponent<Props> {
    render() {
        const { onChange, value, onKeyDown, onSubmit } = this.props

        return (
            <form onSubmit={onSubmit}>
                <TextField
                    label="Type the word, you want to learn"
                    placeholder="example"
                    helperText="You can enter several words. Type one word per line using 'Shift + Enter' to add new lines"
                    variant="outlined"
                    fullWidth
                    multiline
                    rowsMax={20}
                    value={value}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                />
            </form>
        )
    }
}
