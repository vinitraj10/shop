import {
  LOAD_TRANSACTIONS,
  UNAUTH_USER
} from '../actions/types';

const initialState = {
  transactions: null
};

export default function (state = initialState, action) {
    switch (action.type) {
      case LOAD_TRANSACTIONS:
        return { transactions: action.payload };
      case UNAUTH_USER:
        return initialState;
      default:
        return state;
    }
}
