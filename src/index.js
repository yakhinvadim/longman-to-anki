import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import indigo from '@material-ui/core/colors/indigo'
import './index.css'

const theme = createMuiTheme({
    palette: {
        primary: indigo
    },
    typography: {
        useNextVariants: true
    }
})

const MainPage = () => (
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>
)

ReactDOM.render(<MainPage />, document.getElementById('root'))
