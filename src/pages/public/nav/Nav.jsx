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
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3 rounded shadow-sm">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand fw-bold text-primary">
          MyApp
        </NavLink>
        <ul className="navbar-nav ms-auto d-flex align-items-center gap-3 flex-row">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>

          {auth.isLoggedIn && (
            <li className="nav-item">
              <button
                onClick={logOutHandler}
                className="btn btn-outline-danger btn-sm"
              >
                Log out
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
