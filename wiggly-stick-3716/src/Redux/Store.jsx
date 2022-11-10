import {legacy_createStore,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducer";
const composeEnhansers = window._REDUX_DEVTOOLS_EXTENTION_COMPOSE_ || compose;

export const store = legacy_createStore(reducer,composeEnhansers(applyMiddleware(thunk)));