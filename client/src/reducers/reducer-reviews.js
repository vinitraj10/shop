import {
  LOAD_REVIEW,
  UNAUTH_USER
} from '../actions/types';

const initialState = {
  data: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_REVIEW:
      return { data: action.payload };
    case UNAUTH_USER:
     return initialState;
    default:
      return state;
  }
}
