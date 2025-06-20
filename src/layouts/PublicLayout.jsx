import { NavLink, Outlet } from "react-router";
import Nav from "../pages/public/nav/Nav";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loggedIn } from "../store/auth/actions";

const PublicLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const userDetials = JSON.parse(localStorage.getItem("user_details"));
    if (userDetials) dispatch(loggedIn(userDetials));
  }, [dispatch]);

  return (
    <div className="d-flex flex-column min-vh-100">
      <header className="shadow-sm bg-white sticky-top">
        <div className="container">
          <Nav />
        </div>
      </header>

      <main className="flex-grow-1 py-4">
        <div className="container">
          <Outlet />
        </div>
      </main>

      <footer className="bg-light py-3 border-top mt-auto">
        <div className="container text-center text-muted">
          © {new Date().getFullYear()} MyApp — All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default PublicLayout;
