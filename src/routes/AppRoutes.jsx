import Home from "../pages/public/home/Home";
import PublicLayout from "../layouts/PublicLayout";
import PrivateLayout from "../layouts/PrivateLayout";
import SignIn from "../pages/public/authentication/SignIn";
import Dashboard from "../pages/private/dashboard/Dashboard";
import PageNotFound from "../pages/public/PageNotFound";
import Settings from "../pages/private/settings/Settings";
import Analytics from "../pages/private/analytics/Analytics";
import LocationInsights from "../pages/private/locationInsights/LocationInsights";
import PostsManager from "../pages/private/postManager/PostsManager";
import UsersList from "../pages/private/usersList/UsersList";

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
      {
        path: "post_manager",
        Component: PostsManager,
      },
      {
        path: "analytics",
        Component: Analytics,
      },
      {
        path: "location_insights",
        Component: LocationInsights,
      },
      {
        path: "users_list",
        Component: UsersList,
      },
      {
        path: "settings",
        Component: Settings,
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
