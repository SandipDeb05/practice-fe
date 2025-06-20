import { NavLink, Outlet } from "react-router";
import Nav from "../pages/public/nav/Nav";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loggedIn } from "../store/auth/actions";

const PublicLayout = () => {
  return (
    <div className="container mt-2">
      <Nav />
      <main className="py-2">
        <Outlet />
      </main>
      <footer>Public layout footer</footer>
    </div>
  );
};

export default PublicLayout;
