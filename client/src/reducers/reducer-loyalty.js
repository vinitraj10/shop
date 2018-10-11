import {
  ENROLL,
  UNAUTH_USER
} from '../actions/types';

const initialState = {
  enrolled: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ENROLL:
      return { enrolled: true };
    case UNAUTH_USER:
			return initialState;
    default:
      return state;
  }
}
