// Store

// import Reducers
import { combineReducers, createStore } from "redux";
import loginReducer from "./login/index";
// import commentesReducer from "./comments/index"
const reducers = combineReducers({ loginReducer });

// create store
// root state
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
