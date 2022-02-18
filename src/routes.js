/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";

import Reservation from "views/pages/Reservation.js"
import Price from "views/pages/Price.js"
import Dashboard from "views/pages/DashBoard";
import Calculate from "views/pages/Calculate";
import Store from "views/pages/Store.js";
import Review from "views/pages/Review.js";
import Signin from "views/pages/Signin";
import Signup from "views/pages/Signup";
import StoreEdit from "views/pages/StoreEdit";
var routes = [
  {
    path: "/dashboard",
    name: "대시 보드",
    icon: "ni ni-tv-2 text-primary",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/reservation",
    name: "예약 관리",
    icon: "ni ni-calendar-grid-58",
    component: Reservation,
    layout: "/admin",
  },
  {
    path: "/calculate",
    name: "정산 관리",
    icon: "ni ni-archive-2",
    component: Calculate,
    layout: "/admin",
  },
  {
    path: "/store",
    name: "매장 관리",
    icon: "ni ni-shop",
    component: Store,
    layout: "/admin",
  },
  {
    path: "/storeedit",
    name: "매장 정보 설정",
    icon: "ni ni-favourite-28",
    component: StoreEdit,
    layout: "/admin",
  },
  
  {
    path: "/price",
    name: "가격 관리",
    icon: "ni ni-money-coins",
    component: Price,
    layout: "/admin",
  },
  {
    path: "/review",
    name: "후기 관리",
    icon: "ni ni-favourite-28",
    component: Review,
    layout: "/admin",
  },
  {
    path: "/signin",
    name: "로그인(signin)",
    icon: "ni ni-favourite-28",
    component: Signin,
    layout: "/auth",
  },
  {
    path: "/signup",
    name: "회원가입(signup)",
    icon: "ni ni-favourite-28",
    component: Signup,
    layout: "/auth",
  },
 
  {
    path: "/icons",
    name: "Icons - 참고용!",
    icon: "ni ni-planet text-blue", // 색깔은 뒷부분에
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/index",
    name: "Index - 참고용!",
    icon: "ni ni-planet text-blue", // 색깔은 뒷부분에
    component: Index,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps - 참고용!",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile - 참고용!",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables - 참고용!",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login - 참고용!",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register - 참고용!",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
  },
];
export default routes;
