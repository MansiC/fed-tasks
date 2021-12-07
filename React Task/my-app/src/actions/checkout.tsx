import { ActionTypes } from "../Constant/action-types";

export const checkout=(products:any)=>{
    return {
        type:ActionTypes.CHECKOUT,
        payload:products
    }
}