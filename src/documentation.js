// Getting started
// import Colors from "layouts/Documentation/Sections/Colors.jsx";
import Overview from "layouts/Documentation/Sections/getting-started/Overview.jsx";
import Download from "layouts/Documentation/Sections/getting-started/Download.jsx";
import License from "layouts/Documentation/Sections/getting-started/License.jsx";
import Contents from "layouts/Documentation/Sections/getting-started/Contents.jsx";
import BuildTools from "layouts/Documentation/Sections/getting-started/BuildTools.jsx";
import Tutorial from "layouts/Documentation/Sections/getting-started/Tutorial.jsx";
import Variables from "layouts/Documentation/Sections/getting-started/Variables.jsx";
// Foundation
import Colors from "layouts/Documentation/Sections/foundation/Colors.jsx";
import Grid from "layouts/Documentation/Sections/foundation/Grid.jsx";
import Typography from "layouts/Documentation/Sections/foundation/Typography.jsx";
import Icons from "layouts/Documentation/Sections/foundation/Icons.jsx";
// Core components
import Footer from "layouts/Documentation/Sections/core-components/Footer.jsx";
import Navbars from "layouts/Documentation/Sections/core-components/Navbars.jsx";
import PageHeader from "layouts/Documentation/Sections/core-components/PageHeader.jsx";
// Reasctrap components
import Alerts from "layouts/Documentation/Sections/restyled-components/Alerts.jsx";
import Badge from "layouts/Documentation/Sections/restyled-components/Badge.jsx";
import Breadcrumb from "layouts/Documentation/Sections/restyled-components/Breadcrumb.jsx";
import Buttons from "layouts/Documentation/Sections/restyled-components/Buttons.jsx";
import Carousel from "layouts/Documentation/Sections/restyled-components/Carousel.jsx";
import Dropdowns from "layouts/Documentation/Sections/restyled-components/Dropdowns.jsx";
import Forms from "layouts/Documentation/Sections/restyled-components/Forms.jsx";
import Modals from "layouts/Documentation/Sections/restyled-components/Modals.jsx";
import Navs from "layouts/Documentation/Sections/restyled-components/Navs.jsx";
import Navbar from "layouts/Documentation/Sections/restyled-components/Navbar.jsx";
import Pagination from "layouts/Documentation/Sections/restyled-components/Pagination.jsx";
import Progress from "layouts/Documentation/Sections/restyled-components/Progress.jsx";
import Tables from "layouts/Documentation/Sections/restyled-components/Tables.jsx";
import Tooltips from "layouts/Documentation/Sections/restyled-components/Tooltips.jsx";
// Plugins
import Charts from "layouts/Documentation/Sections/plugins/Charts.jsx";
import Datetimepicker from "layouts/Documentation/Sections/plugins/Datetimepicker.jsx";
import Sliders from "layouts/Documentation/Sections/plugins/Sliders.jsx";

var docsRoutes = [
  {
    name: "Getting started",
    path: "/documentation/overview",
    routes: [
      {
        path: "/documentation/overview",
        component: Overview,
        name: "Overview"
      },
      {
        path: "/documentation/download",
        component: Download,
        name: "Download"
      },
      {
        path: "/documentation/build-tools",
        component: BuildTools,
        name: "Build Tools"
      },
      {
        path: "/documentation/contents",
        component: Contents,
        name: "Contents"
      },
      {
        path: "/documentation/license",
        component: License,
        name: "License"
      },
      {
        path: "/documentation/tutorial",
        component: Tutorial,
        name: "Tutorial"
      },
      {
        path: "/documentation/variables",
        component: Variables,
        name: "Variables"
      }
    ]
  },
  {
    name: "Foundation",
    path: "/documentation/colors",
    routes: [
      {
        path: "/documentation/colors",
        component: Colors,
        name: "Colors"
      },
      {
        path: "/documentation/grid",
        component: Grid,
        name: "Grid"
      },
      {
        path: "/documentation/typography",
        component: Typography,
        name: "Typography"
      },
      {
        path: "/documentation/icons",
        component: Icons,
        name: "Icons"
      }
    ]
  },
  {
    name: "Core Components",
    path: "/documentation/custom-upload",
    routes: [
      {
        path: "/documentation/footer",
        component: Footer,
        name: "Footer"
      },
      {
        path: "/documentation/navbars",
        component: Navbars,
        name: "App Navbars"
      },
      {
        path: "/documentation/page-header",
        component: PageHeader,
        name: "PageHeader"
      }
    ]
  },
  {
    name: "Restyled Components",
    path: "/documentation/alert",
    routes: [
      {
        path: "/documentation/alert",
        component: Alerts,
        name: "Alerts"
      },
      {
        path: "/documentation/badge",
        component: Badge,
        name: "Badge"
      },
      {
        path: "/documentation/breadcrumbs",
        component: Breadcrumb,
        name: "Breadcrumb"
      },
      {
        path: "/documentation/buttons",
        component: Buttons,
        name: "Buttons"
      },
      {
        path: "/documentation/carousel",
        component: Carousel,
        name: "Carousel"
      },
      {
        path: "/documentation/dropdowns",
        component: Dropdowns,
        name: "Dropdowns"
      },
      {
        path: "/documentation/forms",
        component: Forms,
        name: "Forms"
      },
      {
        path: "/documentation/modal",
        component: Modals,
        name: "Modals"
      },
      {
        path: "/documentation/navbar",
        component: Navbar,
        name: "Navbars"
      },
      {
        path: "/documentation/navs",
        component: Navs,
        name: "Navs"
      },
      {
        path: "/documentation/pagination",
        component: Pagination,
        name: "Pagination"
      },
      {
        path: "/documentation/progress",
        component: Progress,
        name: "Progress"
      },
      {
        path: "/documentation/tables",
        component: Tables,
        name: "Tables"
      },
      {
        path: "/documentation/tooltips",
        component: Tooltips,
        name: "Tooltips"
      }
    ]
  },
  {
    name: "Plugins",
    path: "/documentation/charts",
    routes: [
      { path: "/documentation/charts", component: Charts, name: "Charts" },
      {
        path: "/documentation/date-time-picker",
        component: Datetimepicker,
        name: "DateTimePicker"
      },
      { path: "/documentation/sliders", component: Sliders, name: "Sliders" }
    ]
  },
  { redirect: true, path: "/documentation", pathTo: "/documentation/overview" }
];

export default docsRoutes;
