import * as types from "./Actiontypes";
export const SingleReducer = (state = {},{type,payload}) =>{
    switch(type){
        case types.GET_SELECTED_PRODUCT:
            return{...state,...payload}
          default:
            return state  
    }

}