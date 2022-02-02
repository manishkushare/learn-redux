import { BUY_CAKE } from "./cakeType"
const buyCake = (number =1 )=> {
    return {
        type : BUY_CAKE,
        payload : number
    }
}
export default buyCake;