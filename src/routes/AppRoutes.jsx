import Home from "../pages/public/home/Home";
import PublicLayout from "../layouts/PublicLayout";
import PrivateLayout from "../layouts/PrivateLayout";
import SignIn from "../pages/public/authentication/SignIn";
import Dashboard from "../pages/private/dashboard/Dashboard";

const AppRoutes = [
  {
    path: "/",
    Component: PublicLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      // {
      //   path: "sign-in",
      //   Component: SignIn,
      // },
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
    Component: function () {
      return <h4>Page Not Found</h4>;
    },
  },
];

export default AppRoutes;
