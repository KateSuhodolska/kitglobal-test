import {
  GET_PRODUCTS_LIST,
  ADD_PRODUCT_TO_CART,
  DELETE_PRODUCT_FROM_CART,
  INCREMENT_PRODUCT,
  DECREMENT_PRODUCT,
} from "./types";
import { CartItem, IState, Vinyl } from "../constants/types";
import { getItem } from "../utils";

const initState = {
  allProducts: [],
  cart: getItem("cart") || [],
};

export const cartReducer = (
  state: IState = initState,
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case GET_PRODUCTS_LIST:
      return {
        ...state,
        allProducts: action.payload,
      };
    case ADD_PRODUCT_TO_CART:
      const newObj = state.allProducts.find(({ id }) => id === action.payload);
      return {
        ...state,
        cart: [...state.cart, { ...(newObj as CartItem), quantity: 1 }].sort(
          (a, b) => (a!.album < b!.album ? -1 : a!.album > b!.album ? 1 : 0)
        ),
      };
    case DELETE_PRODUCT_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(
          (product: Vinyl | CartItem) => product.id !== action.payload
        ),
      };
    case INCREMENT_PRODUCT:
      const incrementObj = state.cart.find(({ id }) => id === action.payload);
      if (incrementObj) {
        incrementObj.quantity += 1;
      }
      return {
        ...state,
        cart: [
          ...state.cart.filter((el) => el.id !== action.payload),
          incrementObj,
        ].sort((a, b) =>
          a!.album < b!.album ? -1 : a!.album > b!.album ? 1 : 0
        ),
      };
    case DECREMENT_PRODUCT:
      const decrementObj = state.cart.find(({ id }) => id === action.payload);
      if (decrementObj?.quantity === 1) return state;
      decrementObj!.quantity -= 1;
      return {
        ...state,
        cart: [
          ...state.cart.filter((el) => el.id !== action.payload),
          decrementObj,
        ].sort((a, b) =>
          a!.album < b!.album ? -1 : a!.album > b!.album ? 1 : 0
        ),
      };

    default:
      return state;
  }
};
