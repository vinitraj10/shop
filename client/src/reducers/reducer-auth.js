import {
	AUTH_USER,
	UNAUTH_USER,
} from '../actions/types';

const initialState = {
	authenticated: false,
	username: '',
	loginError: null,
	signupError: null
};

export default function (state = initialState, action) {
	switch (action.type) {
		case AUTH_USER:
			return { ...state, authenticated: true, username: action.payload };
		case UNAUTH_USER:
			return initialState;
    default:
      return state;
    }
}
