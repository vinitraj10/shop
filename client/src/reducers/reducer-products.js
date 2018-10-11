import {
  FETCHED_PRODUCTS,
  FETCHING_PRODUCTS,
  UNAUTH_USER,
} from '../actions/types';

const initialState = {
  fetching: false,
  fetched: false,
  products: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCHING_PRODUCTS:
      return { fetching: true, fetched: false, products: null };
    case FETCHED_PRODUCTS:
      return { fetching: false, fetched: true, products: action.payload };
    case UNAUTH_USER:
			return initialState;
    default:
      return state;
  }
}
