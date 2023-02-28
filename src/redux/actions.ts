import {
  GET_PRODUCTS_LIST,
  ADD_PRODUCT_TO_CART,
  DELETE_PRODUCT_FROM_CART,
  INCREMENT_PRODUCT,
  DECREMENT_PRODUCT,
} from "./types";
import { Vinyl } from "../constants/types";
import { fetchProductsList } from "../gateway";

export const getProductsList = (data: Array<Vinyl>) => {
  return {
    type: GET_PRODUCTS_LIST,
    payload: data,
  };
};

export const addProductToCart = (id: string) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: id,
  };
};

export const deleteProductFromCart = (id: string) => {
  return {
    type: DELETE_PRODUCT_FROM_CART,
    payload: id,
  };
};

export const incrementProductQuantity = (id: string) => {
  return {
    type: INCREMENT_PRODUCT,
    payload: id,
  };
};

export const decrementProductQuantity = (id: string) => {
  return {
    type: DECREMENT_PRODUCT,
    payload: id,
  };
};

export const fetchingProductsList = () => {
  return async function (dispatch: any) {
    await fetchProductsList().then((data) => {
      if (data.status === 200) {
        dispatch(getProductsList(data.data));
      }
    });
  };
};
