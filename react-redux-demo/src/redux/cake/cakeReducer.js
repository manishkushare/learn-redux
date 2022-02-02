import { BUY_CAKE } from "./cakeType"

const initialState = {
    numOfCake:10
}
const reducer = (state= initialState,action)=> {
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCake : state.numOfCake - action.payload
        }
        default: return state
    }

}

export default reducer;