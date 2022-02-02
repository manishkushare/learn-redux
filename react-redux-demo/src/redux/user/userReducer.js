// import {*} from "./userActions";
import { fetchUserError,fetchUserSuccess, fetchUserRequest } from "./userActions";
import { FETCH_USER_REQUEST,FETCH_USER_ERROR,FETCH_USER_SUCCESS} from "./userTypes";

const initialState = {
    loading : false,
    user : null,
    error : ""
}

const userReducer = (state= initialState,action)=> {
    switch(action.type){
        case FETCH_USER_REQUEST : return {
            ...state,
            loading : true
        }
        case FETCH_USER_SUCCESS : return {
            loading : false,
            user : action.payload,
            error : ""
        }
        case FETCH_USER_ERROR : return {
            loading: false,
            user : null,
            error :action.payload
        }
        default : return state
    }
}

export default userReducer;