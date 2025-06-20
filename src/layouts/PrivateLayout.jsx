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

    if (!userDetials?.token) {
      navigate("/sign-in");
      return;
    }
  }, [auth.isLoggedIn]);

  return (
    <div className="container mt-2">
      <Nav />
      <main className="py-2">
        <Outlet />
      </main>
      <footer>Private layout footer</footer>
    </div>
  );
};

export default PrivateLayout;
