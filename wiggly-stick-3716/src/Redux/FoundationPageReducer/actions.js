import * as types from "./actionTypes";
import axios from "axios";
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


const getProductsData = (dispatch) => {
  dispatch(getProductRequest);
  return axios
    .get("http://localhost:8080/Face_Foundation_Cream")
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