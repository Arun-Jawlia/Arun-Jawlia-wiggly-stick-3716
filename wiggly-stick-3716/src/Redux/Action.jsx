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
// this action call for the selcted product in the 
export const selectedProduct = (data) =>{
    return {
        type:types.GET_SELECTED_PRODUCT,
        payload:data
    }
}
const getProductRequest=()=>{
    return{
        type:types.GET_PRODUCTS_REQUEST
    }
}

// const getProductSuccess=(payload)=>{
//     return{
//         type:types.GET_PRODUCTS_SUCCESS,
//         payload
//     }
// }

const  getProductFailure=()=>{
    return{
        type:types.GET_PRODUCTS_FAILURE
    }
}


const getProductsData =(queryParams)=>(dispatch) => {
  dispatch(getProductRequest);
  return axios
    .get("http://localhost:8080/Face_Foundation_Cream",queryParams)
    .then((r) => {
      dispatch({
        type: types.GET_PRODUCTS_SUCCESS,
        payload: r.data,
      });
    })
    .catch((e) => {
      dispatch(getProductFailure);
    });
};

export { getProductsData };