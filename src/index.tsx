import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import * as serviceWorker from './serviceWorker'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import indigo from '@material-ui/core/colors/indigo'
import './index.css'

const theme = createMuiTheme({
    palette: {
        primary: indigo
    }
})

const MainPage = () => (
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>
)

ReactDOM.render(<MainPage />, document.getElementById('root'))

serviceWorker.register()
