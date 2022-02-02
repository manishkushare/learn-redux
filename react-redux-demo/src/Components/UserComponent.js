import React ,{useEffect} from "react";
import { connect } from "react-redux";
import { fetchUser } from "../redux/user/userActions";
function UserComponent(props) {
    useEffect(()=> {
        props.fetchUser()
    },[])
  return (
    <div>
      <h2>User List</h2>
      {
          props.userInfo.loading ? <h2>Loading....</h2>:
          props.userInfo.error ? <h2>{props.userInfo.error}</h2>:
          <ul>
              {
                  props.userInfo && props.userInfo.user && props.userInfo.user.map((user,index)=> {
                      return <li key={index}>{user.name}</li>
                  })
              }
          </ul>
      }
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    userInfo : state.user
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: ()=> dispatch(fetchUser()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);
