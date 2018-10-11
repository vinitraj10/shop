import axios from 'axios';
import {
  FETCHING_STORES,
  FETCHED_STORES,
  FETCHING_PRODUCTS,
  FETCHED_PRODUCTS
} from './types';

import { tokenHeader } from '../utils/headers';

const ROOT_URL = 'http://localhost:8000/app/api/';
export function getStores() {
  const URL = `${ROOT_URL}stores/`;
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
  const URL = `${ROOT_URL}stores/${pk}/products/`;
  const request = axios.get(URL, tokenHeader());

  return (dispatch) => {
    dispatch({ type: FETCHING_PRODUCTS });
    request.then((response) => {
      dispatch({ type: FETCHED_PRODUCTS, payload: response.data });
    });
  };
}
