import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { indigo500, indigo700 } from 'material-ui/styles/colors'

import './index.css'

const MainPage = () =>
    <MuiThemeProvider
        muiTheme={getMuiTheme({
            palette: {
                primary1Color: indigo500,
                primary2Color: indigo700
            }
        })}
    >
        <App />
    </MuiThemeProvider>

ReactDOM.render(<MainPage />, document.getElementById('root'))
