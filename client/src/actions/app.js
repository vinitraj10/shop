import axios from 'axios';
import {
  FETCHING_STORES,
  FETCHED_STORES,
  FETCHING_PRODUCTS,
  FETCHED_PRODUCTS,
  ENROLL,
  ADD_TO_CART,
  LOAD_CART,
  LOAD_TRANSACTIONS,
  LOAD_PROFILE,
  LOAD_REVIEW,
  NOTIFY
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
      dispatch({ type: ENROLL, payload: response.data.value });
      dispatch({ type: NOTIFY, payload: response.data });
    });
  };
}

export function checkEnrollment(loyality, username) {
  const URL = `${ROOT_URL}wallet/api/checkenrollment/${loyality}/${username}/`;
  const request = axios.get(URL, tokenHeader());
  return (dispatch) => {
    request.then((response) => {
      dispatch({ type: ENROLL, payload: response.data.value });
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

export function loadCart(username) {
  const URL = `${ROOT_URL}app/api/loadcart/${username}/`;
  const request = axios.get(URL, tokenHeader());
  return (dispatch) => {
    request.then((response) => {
      dispatch({ type: LOAD_CART, payload: response.data });
    });
  };
}

export function removeFromCart(cartId, username) {
  const URL = `${ROOT_URL}app/api/removefromcart/${cartId}/${username}`;
  const request = axios.delete(URL, tokenHeader());
  return (dispatch) => {
    request.then((response) => {
      dispatch({ type: LOAD_CART, payload: response.data });
    });
  };
}


export function buyNow(data, callback) {
  const postData = {
    data
  };
  const URL = `${ROOT_URL}app/api/buynow/`;
  const request = axios.post(URL, postData, tokenHeader());
  return (dispatch) => {
    request.then((response) => {
      dispatch({ type: LOAD_CART, payload: response.data });
      callback();
    });
  };
}

export function loadMyTransactions(username) {
  const URL = `${ROOT_URL}app/api/loadmytransactions/${username}`;
  const request = axios.get(URL, tokenHeader());
  return (dispatch) => {
    request.then((response) => {
      dispatch({ type: LOAD_TRANSACTIONS, payload: response.data });
    });
  };
}

export function loadProfile(username) {
  console.log(username);
  const URL = `${ROOT_URL}accounts/api/profile/${username}`;
  console.log(URL);
  const request = axios.get(URL, tokenHeader());
  return (dispatch) => {
    request.then((response) => {
      dispatch({ type: LOAD_PROFILE, payload: response.data });
    });
  };
}

export function addReview(data, productId, callback) {
  const username = localStorage.getItem('username');
  data['username'] = username;
  data['productId'] = productId;
  const URL = `${ROOT_URL}app/api/add_review/`;
  const request = axios.post(URL, data, tokenHeader());
  return (dispatch) => {
    request.then((response) => {
      console.log(response);
      dispatch({ type: 'REVIEWED' });
      callback();
    });
  };
}

export function loadReview(productId) {
  const URL = `${ROOT_URL}app/api/loadreview/${productId}`;
  const request = axios.get(URL, tokenHeader());
  return (dispatch) => {
    request.then((response) => {
      dispatch({ type: LOAD_REVIEW, payload: response.data });
    });
  };
}
