import axios from 'axios';
import {
	AUTH_USER,
	UNAUTH_USER
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
		.catch(() => {
			//
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
		.catch(() => {
      //console.log('Ok');
			//dispatch({type:AUTH_ERROR,payload:'BAD LOGIN CREDENTIALS'});
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
