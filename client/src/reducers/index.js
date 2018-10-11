import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './reducer-auth';
import storesReducer from './reducer-stores';
import productReducer from './reducer-products';
import cartReducer from './reducer-cart';


const rootReducer = combineReducers({
  auth: authReducer,
  stores: storesReducer,
  products: productReducer,
  form: formReducer,
  cart: cartReducer
});

export default rootReducer;
