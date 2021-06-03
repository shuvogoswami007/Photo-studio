import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserContext } from "../../../App";
import jwtDecode from "jwt-decode";

const PrivateRoute = ({ children, ...rest }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const isLoggedIn = () => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      return false;
    }
    const decodedToken = jwtDecode(token);

    const currentTime = new Date().getTime() / 1000;
    return decodedToken.exp > currentTime;
  };

  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedInUser.email || isLoggedIn() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
