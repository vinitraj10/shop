import axios from 'axios';
import {
	AUTH_USER,
	UNAUTH_USER,
} from './types';

const ROOT_URL = 'http://localhost:8000/accounts/api/';

export function signup(formValue, callback) {
	const URL = `${ROOT_URL}register/`;
	return (dispatch) => {
		axios.post(URL, formValue)
		.then((response) => {
			const { username } = response.data;
			console.log(username);
			dispatch({ type: SIGNUP_USER });
			localStorage.setItem('token', response.data.token);
			localStorage.setItem('username', username);
			callback();
		})
		.catch((error) => {
			dispatch({ type: AUTH_ERROR, payload: 'ERROR OCCURED USERNAME MAY EXISTS IN DATABASE' });
		});
	};
}

export function signin(formValue, callback) {
	const URL = `${ROOT_URL}auth/signin/`;
  const req = axios.post(URL, formValue);
	return (dispatch) => {
    console.log(formValue);
		req.then((response) => {
      const { token } = response.data.token;
			const { username } = response.data.username;
			dispatch({ type: AUTH_USER });
			localStorage.setItem('token', token);
			localStorage.setItem('username', username);
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
