import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { Button } from "react-bootstrap";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../../App";
import { useHistory, useLocation } from "react-router-dom";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then(function (result) {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        storeAuthToken();
      })
      .catch(function (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const storeAuthToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem("token", idToken);
        history.replace(from);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="d-flex justify-content-center mt-5">
      <Button variant="outline-primary" onClick={handleGoogleSignIn}>
        Sign in With Google
      </Button>
    </div>
  );
};

export default Login;
