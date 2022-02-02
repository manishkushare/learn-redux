const redux = require("redux");
const axios = require('axios');
const thunk = require('redux-thunk').default;
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_ERROR = "FETCH_USER_ERROR";


const initialState = {
    loading : null,
    user : null,
    error : null
}

const fetchUserRequest = ()=> {
    return {
        type : FETCH_USER_REQUEST,
    }
}
const fetchUserSuccess = (user)=> {
    return {
        type : FETCH_USER_SUCCESS,
        payload : user
    }
}
const fetchUserError = (errror)=> {
    return {
        type : FETCH_USER_ERROR,
        payload: errror
    }
}

const fetchUser =()=> {
    return async (dispatch) => {
        try {
            dispatch(fetchUserRequest());
            let response = await axios.get('https://jsonplaceholder.typicode.com/us');
            let user =  response.data.map(user=> user.id);
            dispatch(fetchUserSuccess(user));
        } catch (error) {
            dispatch(fetchUserError(error.message));
        }

    }
}
const reducer = (state= initialState, action)=> {
    switch(action.type){
        case FETCH_USER_REQUEST: return {
            ...state,
            loading : true,
        }
        case FETCH_USER_SUCCESS: return {
            loading : false,
            user :action.payload,
            error:""
        }
        case FETCH_USER_ERROR: return {
            loading :false,
            user : null,
            error :action.payload
        }
    }
}

const store = createStore(reducer,applyMiddleware(thunk));
store.subscribe(()=> console.log( store.getState() ) );
store.dispatch(fetchUser());