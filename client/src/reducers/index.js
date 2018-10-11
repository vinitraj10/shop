import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './reducer-auth';
import storesReducer from './reducer-stores';
import productReducer from './reducer-products';
import cartReducer from './reducer-cart';
import transactionReducer from './reducer-transactions';
import profileReducer from './reducer-profile';
import reviewReducer from './reducer-reviews';

const rootReducer = combineReducers({
  auth: authReducer,
  stores: storesReducer,
  products: productReducer,
  form: formReducer,
  cart: cartReducer,
  transactions: transactionReducer,
  profile: profileReducer,
  review: reviewReducer
});


export default rootReducer;
