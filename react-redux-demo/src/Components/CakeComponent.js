import buyCake from "../redux/cake/cakeAction";
import {connect }from "react-redux";
function CakeComponent(props){
    return (
        <div>
            <h2>Number of Cakes - {props.numOfCake}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}
// how to connect react with redux
// step 1 create function called mapStateToProps which will accept state as an argument and 
// will return desired or selected state properties which are required in particualr component
const mapStateToProps = state => {
    return {
        numOfCake : state.cake.numOfCake
    }
}
// step 2 create mapDispatchToProps function which will accpet dispacth mathod of the redux 
// as an argument and will return dispacth action requied for particular component
const mapDispatchToProps = dispatch=> {
    return {
        buyCake : ()=> dispatch(buyCake())
    }
}
// step 3 now we need to connect react with redux for that will use property of react-redux library
// called connect and will use it as higher order componnets while exporting Cake Componnet
export default connect(mapStateToProps,mapDispatchToProps)(CakeComponent);