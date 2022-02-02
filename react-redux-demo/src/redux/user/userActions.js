import { FETCH_USER_ERROR,FETCH_USER_REQUEST,FETCH_USER_SUCCESS} from "./userTypes";
import axios from "axios";

export const fetchUserRequest = ()=> {
    return {
        type : FETCH_USER_REQUEST
    }
};

export const fetchUserSuccess = (user)=> {
    return {
        type : FETCH_USER_SUCCESS,
        payload : user
    }
}

export const fetchUserError = (error)=> {
    return {
        type: FETCH_USER_ERROR,
        payload :error
    }
}

export const fetchUser = ()=> {
    return async (dispatch)=> {
        try {
             dispatch(fetchUserRequest);
            let user = await axios.get('https://jsonplaceholder.typicode.com/users');
            console.log(user);
            user  =   user.data;
            await dispatch(fetchUserSuccess(user))
        } catch (error) {
            fetchUserError(error.message);
        }

    }
}

// export default {fetchUserError,fetchUserSuccess,fetchUserRequest};