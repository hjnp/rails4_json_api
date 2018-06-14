import { combineReducers } from 'redux';

import CountReducer from "./CountReducer";
import AuthenticationReducer from "./authenticationReducer";


const rootReducer = combineReducers({
  CountReducer,
  AuthenticationReducer
});

export default rootReducer;