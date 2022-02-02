import reducer from "./cake/cakeReducer";
import iceCreamReducer from "./icecream/iceCreamReducer";
import { combineReducers } from "redux";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
    cake : reducer,
    iceCream : iceCreamReducer,
    user : userReducer
});

export default rootReducer;