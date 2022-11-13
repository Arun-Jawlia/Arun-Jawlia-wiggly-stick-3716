import {legacy_createStore,applyMiddleware,compose, combineReducers} from "redux";
import thunk from "redux-thunk";
import { Foundreducer } from "./Foundreducer";
import { ProductsReducer } from "./ProductsReducer";
import { SingleReducer } from "./SingleReducer";

const reducer = combineReducers({
    allData:ProductsReducer,
    singleData:SingleReducer,
    foundData:Foundreducer,
})

const composeEnhansers = window._REDUX_DEVTOOLS_EXTENTION_COMPOSE_ || compose;

export const store = legacy_createStore(reducer,composeEnhansers(applyMiddleware(thunk)));