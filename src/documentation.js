// Getting started
// import Colors from "layouts/Documentation/Sections/Colors.js";
import Overview from "layouts/Documentation/Sections/getting-started/Overview.js";
import QuickStart from "layouts/Documentation/Sections/getting-started/QuickStart.js";
import Download from "layouts/Documentation/Sections/getting-started/Download.js";
import License from "layouts/Documentation/Sections/getting-started/License.js";
import Contents from "layouts/Documentation/Sections/getting-started/Contents.js";
import BuildTools from "layouts/Documentation/Sections/getting-started/BuildTools.js";
import Variables from "layouts/Documentation/Sections/getting-started/Variables.js";
import RoutingSystem from "layouts/Documentation/Sections/getting-started/RoutingSystem.js";
// Foundation
import Colors from "layouts/Documentation/Sections/foundation/Colors.js";
import Grid from "layouts/Documentation/Sections/foundation/Grid.js";
import Typography from "layouts/Documentation/Sections/foundation/Typography.js";
import Icons from "layouts/Documentation/Sections/foundation/Icons.js";
// Core components
import Footer from "layouts/Documentation/Sections/core-components/Footer.js";
import Navbars from "layouts/Documentation/Sections/core-components/Navbars.js";
import Headers from "layouts/Documentation/Sections/core-components/Headers.js";
import Sidebar from "layouts/Documentation/Sections/core-components/Sidebar.js";
// Reasctrap components
import Alerts from "layouts/Documentation/Sections/restyled-components/Alerts.js";
import Badge from "layouts/Documentation/Sections/restyled-components/Badge.js";
import Buttons from "layouts/Documentation/Sections/restyled-components/Buttons.js";
import Cards from "layouts/Documentation/Sections/restyled-components/Cards.js";
import Forms from "layouts/Documentation/Sections/restyled-components/Forms.js";
import Modals from "layouts/Documentation/Sections/restyled-components/Modals.js";
import Navs from "layouts/Documentation/Sections/restyled-components/Navs.js";
import Navbar from "layouts/Documentation/Sections/restyled-components/Navbar.js";
import Pagination from "layouts/Documentation/Sections/restyled-components/Pagination.js";
import Popovers from "layouts/Documentation/Sections/restyled-components/Popovers.js";
import Progress from "layouts/Documentation/Sections/restyled-components/Progress.js";
import Tables from "layouts/Documentation/Sections/restyled-components/Tables.js";
import Tooltips from "layouts/Documentation/Sections/restyled-components/Tooltips.js";
// Plugins
import Charts from "layouts/Documentation/Sections/plugins/Charts.js";
import CopyToClipboard from "layouts/Documentation/Sections/plugins/CopyToClipboard.js";
import Datetimepicker from "layouts/Documentation/Sections/plugins/Datetimepicker.js";
import Maps from "layouts/Documentation/Sections/plugins/Maps.js";
import Sliders from "layouts/Documentation/Sections/plugins/Sliders.js";

var docsRoutes = [
  {
    name: "Getting started",
    path: "/documentation/overview",
    routes: [
      {
        path: "/documentation/overview",
        component: Overview,
        name: "Overview",
      },
      {
        path: "/documentation/quick-start",
        component: QuickStart,
        name: "Quick Start",
      },
      {
        path: "/documentation/license",
        component: License,
        name: "License",
      },
      {
        path: "/documentation/download",
        component: Download,
        name: "Download",
      },
      {
        path: "/documentation/contents",
        component: Contents,
        name: "Contents",
      },
      {
        path: "/documentation/build-tools",
        component: BuildTools,
        name: "Build Tools",
      },
      {
        path: "/documentation/variables",
        component: Variables,
        name: "Variables",
      },
      {
        path: "/documentation/routing-system",
        component: RoutingSystem,
        name: "Routing System",
      },
    ],
  },
  {
    name: "Foundation",
    path: "/documentation/colors",
    routes: [
      {
        path: "/documentation/colors",
        component: Colors,
        name: "Colors",
      },
      {
        path: "/documentation/grid",
        component: Grid,
        name: "Grid",
      },
      {
        path: "/documentation/typography",
        component: Typography,
        name: "Typography",
      },
      {
        path: "/documentation/icons",
        component: Icons,
        name: "Icons",
      },
    ],
  },
  {
    name: "Core Components",
    path: "/documentation/custom-upload",
    routes: [
      {
        path: "/documentation/footer",
        component: Footer,
        name: "Footer",
      },
      {
        path: "/documentation/app-navigation",
        component: Navbars,
        name: "App Navbars",
      },
      {
        path: "/documentation/page-header",
        component: Headers,
        name: "Headers",
      },
      {
        path: "/documentation/sidebar",
        component: Sidebar,
        name: "Sidebar",
      },
    ],
  },
  {
    name: "Restyled Components",
    path: "/documentation/alert",
    routes: [
      {
        path: "/documentation/alert",
        component: Alerts,
        name: "Alerts",
      },
      {
        path: "/documentation/badge",
        component: Badge,
        name: "Badge",
      },
      {
        path: "/documentation/buttons",
        component: Buttons,
        name: "Buttons",
      },
      {
        path: "/documentation/cards",
        component: Cards,
        name: "Cards",
      },
      {
        path: "/documentation/forms",
        component: Forms,
        name: "Forms",
      },
      {
        path: "/documentation/modal",
        component: Modals,
        name: "Modals",
      },
      {
        path: "/documentation/navbar",
        component: Navbar,
        name: "Navbars",
      },
      {
        path: "/documentation/navs",
        component: Navs,
        name: "Navs",
      },
      {
        path: "/documentation/pagination",
        component: Pagination,
        name: "Pagination",
      },
      {
        path: "/documentation/popovers",
        component: Popovers,
        name: "Popovers",
      },
      {
        path: "/documentation/progress",
        component: Progress,
        name: "Progress",
      },
      {
        path: "/documentation/tables",
        component: Tables,
        name: "Tables",
      },
      {
        path: "/documentation/tooltips",
        component: Tooltips,
        name: "Tooltips",
      },
    ],
  },
  {
    name: "Plugins",
    path: "/documentation/charts",
    routes: [
      { path: "/documentation/charts", component: Charts, name: "Charts" },
      {
        path: "/documentation/copy-to-clipboard",
        component: CopyToClipboard,
        name: "Copy To Clipboard",
      },
      {
        path: "/documentation/date-time-picker",
        component: Datetimepicker,
        name: "DateTimePicker",
      },
      { path: "/documentation/maps", component: Maps, name: "Maps" },
      { path: "/documentation/sliders", component: Sliders, name: "Sliders" },
    ],
  },
  { redirect: true, path: "/documentation", pathTo: "/documentation/overview" },
];

export default docsRoutes;
