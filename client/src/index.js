import 'spectre.css/dist/spectre.min.css';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Main } from './components';
import { AUTH_USER } from './actions/types';

const token = localStorage.getItem('token');
if (token) {
	store.dispatch({ type: AUTH_USER });
}

const rootDiv = document.getElementById('root');

render(
	<Provider store={store}>
		<Router>
			<Main />
		</Router>
	</Provider>,
	rootDiv
);
