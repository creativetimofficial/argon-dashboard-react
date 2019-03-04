import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/scss/argon-dashboard-react.scss";

ReactDOM.render(
  // <BrowserRouter history={hist}>
  //   <Switch>
  //     <Route path="/admin" render={props => <AdminLayout {...props} />} />
  //     <Redirect from="/" to="/admin/dashboard" />
  //   </Switch>
  // </BrowserRouter>,
  <div>Hey from argon</div>,
  document.getElementById("root")
);
