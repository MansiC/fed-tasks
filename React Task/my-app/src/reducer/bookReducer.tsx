import { ActionTypes } from "../Constant/action-types";
import { BooksData } from "../Components/Home/BooksData";

const initialState = {
  products: BooksData,
};

export const bookReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case ActionTypes.GET_BOOKS:
      return state;
    case ActionTypes.SET_BOOK:
      state.products.push(payload);
      return state;
    default:
      return state;
  }
};
