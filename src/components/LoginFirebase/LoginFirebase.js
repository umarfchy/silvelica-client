//basic imports
import React from "react";
import { handleGoogleLogin, initLoginFramework } from "../../loginManager";

//styling and imgs
import "./LoginFirebase.css";
import googleIcon from "./../../Images/icons/google_logo.svg";

//all hooks
import { useHistory, useLocation } from "react-router";
import { userLogin } from "../../actions/index";
import { useDispatch, useSelector } from "react-redux";

const LoginFirebase = () => {
  // useDispatch was used in replacement to useContext.
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  initLoginFramework();

  const googleLogin = () => {
    handleGoogleLogin().then(res => {
      dispatch(userLogin(res));
      history.replace(from);
    });
  };

  //for testing purpose. Not in the production environment
  const user = useSelector(state => state.user);
  console.log(user);

  return (
    <div className="signInMainDiv">
      <button className="signInBtn" onClick={googleLogin}>
        <img src={googleIcon} alt="" />
        <p className="my-auto">Continue with Google</p>
      </button>
    </div>
  );
};

export default LoginFirebase;
