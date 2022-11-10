import * as types from "./Actiontypes";

const initialState = {
    productData: [],
    isLoading:false,
    isError:false,
}
export const reducer = (oldState = initialState,action) =>{
    const {type,payload}  = action;
    switch(type){
        case types.GET_DATA_REQUEST:
            return{
                ...oldState,
                isLoading:true
            }
        case types.GET_DATA_SUCCESS:
            return{
                ...oldState,
                productData:payload,
                isLoading:false
            }
        case types.GET_DATA_FALIURE:
            return{
                ...oldState,
                isError:true
            }
        default:
            return oldState    
    }

}