import {connect} from "react-redux"
import buyCake from "../redux/cake/cakeAction";
import buyIceCream from "../redux/icecream/iceCreamAction";
function ItemComponent(props){
    return (
        <div>

            <h2>Item - {props.item} </h2>
            <button onClick={props.buyItem}>Buy Item</button>
        </div>
    
    )
}

const mapStateToProps = (state, ownProps)=> {
    const item = ownProps.cake? state.cake.numOfCake: state.iceCream.numOfIceCream;
    return {
        item
    }
}
const mapDispatchToProps = (dispatch,ownProps)=> {
   const dispatchFunction= ownProps.cake ? ()=> dispatch(buyCake()): ()=> dispatch(buyIceCream());
   return {
       buyItem : dispatchFunction
   }
}
export default connect(mapStateToProps,mapDispatchToProps)(ItemComponent);