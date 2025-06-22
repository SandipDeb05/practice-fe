import Home from "../pages/public/home/Home";
import PublicLayout from "../layouts/PublicLayout";
import PrivateLayout from "../layouts/PrivateLayout";
import SignIn from "../pages/public/authentication/SignIn";
import Dashboard from "../pages/private/dashboard/Dashboard";
import PageNotFound from "../pages/public/PageNotFound";

const AppRoutes = [
  {
    path: "/",
    Component: PublicLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
  {
    path: "admin",
    Component: PrivateLayout,
    children: [
      {
        path: "dashboard",
        Component: Dashboard,
      },
    ],
  },
  {
    path: "*",
    Component: PublicLayout,
    children: [
      {
        path: "*",
        Component: PageNotFound,
      },
    ],
  },
];

export default AppRoutes;
