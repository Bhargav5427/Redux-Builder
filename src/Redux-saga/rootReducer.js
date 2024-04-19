
import { combineReducers } from "redux";
import userReducer from "./user/reducer/Reducer";

let rootReducers = combineReducers({
    userReducer
});

export default rootReducers;