import axios from 'axios';
import {
  FETCHING_STORES,
  FETCHED_STORES,
  FETCHING_PRODUCTS,
  FETCHED_PRODUCTS,
  ENROLL,
  ADD_TO_CART,
  LOAD_CART
} from './types';

import { tokenHeader } from '../utils/headers';

const ROOT_URL = 'http://localhost:8000/';
export function getStores() {
  const URL = `${ROOT_URL}app/api/stores/`;
  const request = axios.get(URL, tokenHeader());

  return (dispatch) => {
    dispatch({ type: FETCHING_STORES });
    request.then((response) => {
      dispatch({ type: FETCHED_STORES, payload: response });
    })
    .catch(() => {

    });
  };
}

export function getProducts(pk) {
  const URL = `${ROOT_URL}app/api/stores/${pk}/products/`;
  const request = axios.get(URL, tokenHeader());

  return (dispatch) => {
    dispatch({ type: FETCHING_PRODUCTS });
    request.then((response) => {
      dispatch({ type: FETCHED_PRODUCTS, payload: response.data });
    });
  };
}

export function enroll(username, loyaltyId) {
  const data = {
    username, loyaltyId
  };
  const URL = `${ROOT_URL}wallet/api/enroll/`;
  const request = axios.post(URL, data, tokenHeader());

  return (dispatch) => {
    request.then((response) => {
      console.log(response);
      dispatch({ type: ENROLL });
    });
  };
}

export function addToCart(username, productId) {
  const data = {
    username, productId
  };
  const URL = `${ROOT_URL}app/api/addtocart/`;
  const request = axios.post(URL, data, tokenHeader());

  return (dispatch) => {
    request.then((response) => {
      dispatch({ type: ADD_TO_CART, payload: response.data });
    });
  };
}

export function loadCart() {
  const username = localStorage.getItem('username');
  const URL = `${ROOT_URL}app/api/loadcart/${username}/`;
  const request = axios.get(URL, tokenHeader());
  return (dispatch) => {
    request.then((response) => {
      dispatch({ type: LOAD_CART, payload: response.data });
    });
  };
}

export function removeFromCart(cartId) {
  const username = localStorage.getItem('username');
  const URL = `${ROOT_URL}app/api/removefromcart/${cartId}/${username}`;
  const request = axios.delete(URL, tokenHeader());
  return (dispatch) => {
    request.then((response) => {
      dispatch({ type: LOAD_CART, payload: response.data });
    });
  };
}
