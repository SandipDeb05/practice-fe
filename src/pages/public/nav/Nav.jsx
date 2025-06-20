import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router";
import { authSelector } from "../../../store/auth/selector";
import { loggedIn, loggedOut } from "../../../store/auth/actions";

const Nav = () => {
  const auth = useSelector(authSelector);
  const dispatch = useDispatch();

  const logOutHandler = () => {
    localStorage.clear();
    dispatch(loggedOut());
  };

  return (
    <nav>
      <ul className="list-unstyled d-flex gap-3">
        <li className="text-decoration-none">
          <NavLink to={"/"}>Home</NavLink>
        </li>

        {auth.isLoggedIn && (
          <li>
            <button onClick={logOutHandler} className="btn btn-danger btn-sm">
              Log out
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
