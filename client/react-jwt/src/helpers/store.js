import { createStore, combineReducers } from "redux";


const initialState = {
  CountReducer: { count: 123, wish_value: 12 },
  users: [],
  session: !!sessionStorage.jwt
};

const store = createStore(reducer, initialState);

export default store;


import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../_reducers';

const loggerMiddleware = createLogger();

export const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);