import {
	AUTH_USER,
	UNAUTH_USER,
} from '../actions/types';

const initialState = {
	authenticated: false,
	loginError: null,
	signupError: null
};

export default function (state = initialState, action) {
	switch (action.type) {
		case AUTH_USER:
			return { ...state, authenticated: true };
		case UNAUTH_USER:
			return { ...state, authenticated: false };
    default:
      return state;
    }
}
