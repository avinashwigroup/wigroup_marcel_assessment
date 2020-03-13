import { Route, Redirect } from "react-router";
import React from "react";

export const PublicRoute = ({
  component: Component,
  authenticated,
  ...rest
}) => {
  return (
    <Route
      render={props =>

        !authenticated ? <Component {...props} /> : <Redirect to="/continue" />
      }
      {...rest}
    />
  )
}

export const PrivateRoute = ({
  component: Component,
  authenticated,
  ...rest
}) => {
  return (
    <Route
      render={props =>

        authenticated ? <Component {...props} /> : <Redirect to="/" />
      }
      {...rest}
    />
  )
}
