import { combineReducers } from "redux";
import { bookReducer } from "./bookReducer";
const rootReducer=combineReducers({
    allBooks:bookReducer,
})

export default rootReducer;