import {
  ENROLL,
  UNAUTH_USER
} from '../actions/types';

const initialState = {
  enrolled: 0
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ENROLL:
      return { enrolled: action.payload };
    case UNAUTH_USER:
			return initialState;
    default:
      return state;
  }
}
