const redux = require('redux');
const redux_logger = require('redux-logger');


const createStore = redux.createStore;
const combinedReducer = redux.combineReducers;
const logger = redux_logger.logger;
const applyMiddleware = redux.applyMiddleware;

console.log("learning redux");
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM ="BUY_ICECREAM";
// a fucntion that returns action is called action creator
function buyCake(){
    // action is a simple JS object
    return {
        type: BUY_CAKE 
    }
    
}
function buyIceCream(){
    // action is a simple JS object
    return {
        type: BUY_ICECREAM 
    }
    
}
// state of our app
// const initialState = {
//     numOfCakes :10,
//     numOfIceCream : 20
// }
const initialCakeState = {
    numOfCakes :10,
}
const initialIceCreamState = {
    numOfIceCream:20
}

// const reducer = (prevState = initialState, action)=> {
//     switch(action.type){
//         case BUY_CAKE : return {
//             // here we are not mutating prevState, rather returning new State itself;
//             ...prevState,//copying prevState and below only updating numOfCake property
//             numOfCakes: prevState.numOfCakes-1
//         }
//         case BUY_ICECREAM :  return {
//             ...prevState,
//             numOfIceCream : prevState.numOfIceCream-1
//         }
//         default : return prevState
//     }
// }

const reducerIceCream = (prevState = initialIceCreamState, action)=> {
    switch(action.type){
        case BUY_ICECREAM :  return {
            ...prevState,
            numOfIceCream : prevState.numOfIceCream-1
        }
        default : return prevState
    }
}
const reducerCake = (prevState = initialCakeState, action)=> {
    switch(action.type){
        case BUY_CAKE : return {
            // here we are not mutating prevState, rather returning new State itself;
            ...prevState,//copying prevState and below only updating numOfCake property
            numOfCakes: prevState.numOfCakes-1
        }
        default : return prevState
    }
}


//here at line 30 we created redux store
const rootReducer = combinedReducer({
    cake : reducerCake,
    iceCream: reducerIceCream
})
const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial State : ",store.getState());
const unsubscribe = store.subscribe(()=>{});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();