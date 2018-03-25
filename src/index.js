import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import indigo from 'material-ui/colors/indigo'
import './index.css'

const indigo500 = indigo['500']
const indigo700 = indigo['700']

const theme = createMuiTheme(
	createMuiTheme({
		palette: {
			primary1Color: indigo500,
			primary2Color: indigo700
		}
	})
)

const MainPage = () => (
	<MuiThemeProvider theme={theme}>
		<App />
	</MuiThemeProvider>
)

ReactDOM.render(<MainPage />, document.getElementById('root'))
