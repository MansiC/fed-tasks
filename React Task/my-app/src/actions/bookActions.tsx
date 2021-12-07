import { ActionTypes } from "../Constant/action-types"

export const getBooks = (product:any) => {
    return {
        type: ActionTypes.GET_BOOKS,
        payload:product
    };
}

export const setBook = (product:any) => {
    return {
        type: ActionTypes.SET_BOOK,
        payload:product
    }
}
