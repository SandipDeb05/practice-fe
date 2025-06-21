import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router";
import { authSelector } from "../store/auth/selector";
import Nav from "../pages/public/nav/Nav";
import { loggedIn } from "../store/auth/actions";
import { useGetPostLists } from "../query/queryHooks/homeQueries";

const PrivateLayout = () => {
  const auth = useSelector(authSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const userDetials = JSON.parse(localStorage.getItem("user_details"));
    if (userDetials) dispatch(loggedIn(userDetials));
  }, [auth.isLoggedIn]);

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
          © {new Date().getFullYear()} MyApp — Private Access
        </div>
      </footer>
    </div>
  );
};

export default PrivateLayout;
