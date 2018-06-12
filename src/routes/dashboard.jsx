import DashboardPage from "container/Dashboard";
import SettingsPage from "views/Settings/Settings.jsx";

import {
  Dashboard,
  Person,
  ContentPaste,
  LibraryBooks,
  BubbleChart,
  LocationOn,
  Notifications
} from "@material-ui/icons";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "BotOps Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/settings",
    sidebarName: "Settings",
    navbarName: "Account Setting",
    icon: Person,
    component: SettingsPage
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
