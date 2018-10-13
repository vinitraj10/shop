import axios from 'axios';
import {
	AUTH_USER,
	UNAUTH_USER,
	NOTIFY
} from './types';

const ROOT_URL = 'http://localhost:8000/accounts/api/';

export function signup(formValue, callback) {
	const URL = `${ROOT_URL}auth/signup/`;
	return (dispatch) => {
		axios.post(URL, formValue)
		.then((response) => {
			const { username } = response.data;
			const { token } = response.data;
			console.log(token);
			localStorage.setItem('token', token);
			localStorage.setItem('username', username);
			dispatch({ type: AUTH_USER, payload: username });
			callback();
		})
		.catch((error) => {
				dispatch({ type: NOTIFY, payload: error.response.data });
		});
	};
}

export function signin(formValue, callback) {
	const URL = `${ROOT_URL}auth/signin/`;
	return (dispatch) => {
    console.log(formValue);
		axios.post(URL, formValue)
		.then((response) => {
      const { token } = response.data;
			const { username } = response.data;
			localStorage.setItem('token', token);
			localStorage.setItem('username', username);
			dispatch({ type: AUTH_USER, payload: username });
			callback();
		})
		.catch((error) => {
				dispatch({ type: NOTIFY, payload: error.response.data });
		});
	};
}

export function signout(callback) {
	localStorage.removeItem('token');
	localStorage.removeItem('username');
	return (dispatch) => {
		dispatch({ type: UNAUTH_USER });
		callback();
	};
}
