import {
  ADD_TO_CART,
  LOAD_CART
} from '../actions/types';

const initialState = {
  products: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return { products: action.payload };
    case LOAD_CART:
      return { products: action.payload };
    default:
      return state;
  }
}
