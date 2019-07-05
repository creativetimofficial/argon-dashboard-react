/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import ReactPixel from "react-facebook-pixel";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";
import "layouts/Documentation/assets-for-demo/docs.scss";
import "layouts/Documentation/assets-for-demo/react-docs.scss";

import AdminLayout from "layouts/Admin.jsx";
import AuthLayout from "layouts/Auth.jsx";
import Documentation from "layouts/Documentation/Documentation.jsx";

ReactPixel.init("111649226022273");
ReactPixel.pageView();
ReactPixel.fbq("track", "PageView");

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Route path="/auth" render={props => <AuthLayout {...props} />} />
      <Route
        path="/documentation"
        render={props => <Documentation {...props} />}
      />
      <Redirect from="/" to="/admin/index" />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
