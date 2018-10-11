import {
  FETCHED_STORES,
  FETCHING_STORES,
  UNAUTH_USER
} from '../actions/types';

const initialState = {
  fetching: false,
  fetched: false,
  stores: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCHING_STORES:
      return { fetching: true, fetched: false, stores: null };
    case FETCHED_STORES:
      return { fetching: false, fetched: true, stores: action.payload };
    case UNAUTH_USER:
      return initialState;
    default:
      return state;
  }
}
