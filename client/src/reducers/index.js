import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './reducer-auth';
import storesReducer from './reducer-stores';
import productReducer from './reducer-products';


const rootReducer = combineReducers({
  auth: authReducer,
  stores: storesReducer,
  products: productReducer,
  form: formReducer
});

export default rootReducer;
