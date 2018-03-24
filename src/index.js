import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {
    MuiThemeProvider as NewMuiThemeProvider,
    createMuiTheme
} from 'material-ui-next/styles'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import indigo from 'material-ui-next/colors/indigo'
import './index.css'

const indigo500 = indigo['500']
const indigo700 = indigo['700']

const themeV1 = createMuiTheme(
    getMuiTheme({
        palette: {
            primary1Color: indigo500,
            primary2Color: indigo700
        }
    })
)

const themeV0 = getMuiTheme(
    getMuiTheme({
        palette: {
            primary1Color: indigo500,
            primary2Color: indigo700
        }
    })
)

const MainPage = () =>
    <NewMuiThemeProvider theme={themeV1}>
        <MuiThemeProvider muiTheme={themeV0}>
            <App />
        </MuiThemeProvider>
    </NewMuiThemeProvider>

ReactDOM.render(<MainPage />, document.getElementById('root'))
