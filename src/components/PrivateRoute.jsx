import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { useAuth } from "../context/auth-user";

export default function PrivateRoute({ children, ...rest }) {
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  return (
    <Route {...rest}>
      {isAuthenticated ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: {
              from: location,
            },
          }}
        ></Redirect>
      )}
    </Route>
  );
}
