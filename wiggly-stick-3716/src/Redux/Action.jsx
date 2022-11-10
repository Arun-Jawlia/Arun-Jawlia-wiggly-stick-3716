import * as types from "./Actiontypes";
import axios from "axios";

export const getDatarequest = () =>{
    return{
        type:types.GET_DATA_REQUEST
    }
}

export const getData = (queryParams) => (dispatch) =>{
   dispatch(getDatarequest());
   return axios.get("http://localhost:8080/products",queryParams)
   .then((r)=>{
    dispatch({
        type:types.GET_DATA_SUCCESS,
        payload:r.data
    });
   })
   .catch((e)=>{
    dispatch({type:types.GET_DATA_FALIURE})
   });
}