import buyIceCream from "../redux/icecream/iceCreamAction";
import {connect} from "react-redux";
function IceCreamComponent(props){
    return (
        <div>
            <h2>Num of Ice-Cream {props.numOfIceCream} </h2>
            <button onClick={props.buyIceCream}>Buy IceCream</button>
        </div>
    )
}

const mapStateToProps = state=> {
    return {
        numOfIceCream : state.iceCream.numOfIceCream
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream :()=> dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IceCreamComponent);