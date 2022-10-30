import { combineReducers } from "redux";
import addItem from "./addItem";
import productReducer from "./productReducer";



const rootReducers = combineReducers({
    addItem,
    productReducer,
})

export default rootReducers