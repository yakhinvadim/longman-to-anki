import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { indigo500, indigo700 } from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';

import './index.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const MainPage = () => (
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
);

ReactDOM.render(
	<MainPage />,
	document.getElementById('root')
);
