import React from "react";

import { Button } from "@mui/material";

import classes from "./Login.module.css";
import { auth, provider } from "../../firebase";
import { useStateValue } from "../../store/StateProvider";
import { actionTypes } from "../../store/reducer";

function Login() {
  const [/*state*/, dispatch] = useStateValue();

  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      console.log(result.user.displayName);
      dispatch({
        type: actionTypes.SET_USER,
        user: result.user
      });

    }).catch((error) => {
      alert(error.message)
    });
  };

  return (
    <div className={classes.login}>
      <div className={classes.login__container}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2111/2111615.png"
          alt=""
        />

        <h1>Sign in to GMO Slack Clone</h1>
        <p>gmo.slack.com</p>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  );
}

export default Login;
