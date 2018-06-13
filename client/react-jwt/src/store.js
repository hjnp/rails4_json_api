import { createStore, combineReducers } from "redux";

import CountReducer from "./reducers/CountReducer";


const reducer = combineReducers({
  CountReducer
});

const initialState = {
  CountReducer: { count: 123, wish_value: 12 }
};

const store = createStore(reducer, initialState);

export default store;
