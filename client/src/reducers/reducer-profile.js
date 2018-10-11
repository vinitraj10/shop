import { LOAD_PROFILE, UNAUTH_USER } from '../actions/types';

const initialState = {
  profile: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_PROFILE:
      return { profile: action.payload };
    case UNAUTH_USER:
      return initialState;
    default:
      return state;
  }
}
