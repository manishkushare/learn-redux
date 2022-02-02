import CakeComponent from "./CakeComponent";
import IceCreamComponent from "./IceCreamComponent";
import store from "../redux/store";
import {Provider} from "react-redux";
import NewCakeComponent from "./NewCakeComponent";
import ItemComponent from "./ItemComponent";
import UserComponent from "./UserComponent";
function App(){
    return (
        <Provider store={store}>
            <UserComponent/>
            {/* <CakeComponent/>
            <IceCreamComponent/>
            <NewCakeComponent/>
            <ItemComponent/>
            <ItemComponent cake/> */}
        </Provider>
    )
}
export default App;