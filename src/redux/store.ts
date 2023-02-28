import { applyMiddleware, createStore } from "redux";
import { cartReducer } from "./reducers";
import thunk from "redux-thunk";

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  //@ts-ignore
  cartReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
