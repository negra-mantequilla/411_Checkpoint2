import React from "react";
import { Switch, Route, Redirect } from "react-router";
import cookie from "cookie";

import Listing from "./pages/Listing";
import Login from "./pages/Login";
import Detail from "./pages/Detail";
import data from "./small_biz_data";

// Write checkAuth function here
// Check the cookies for a cookie called "loggedIn"
const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies["loggedIn"] ? true : false;
};

// Write ProtectedRoute function here
const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        checkAuth() ? ( // either true when the user is logged in or false when the user is logged out
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

const Router = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route exact path="/" component={Listing} />
      <Route path="/detail/:id" component={Detail}/>
      <Route path="/small_biz_data" component={data}/>
    </Switch>
  );
};

export default Router;
