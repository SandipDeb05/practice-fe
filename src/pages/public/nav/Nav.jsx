import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router";
import { authSelector } from "../../../store/auth/selector";
import { loggedIn, loggedOut } from "../../../store/auth/actions";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

const Nav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout,
    getAccessTokenSilently,
  } = useAuth0();

  useEffect(() => {
    const getToken = async () => {
      const token = await getAccessTokenSilently();
      const userDetails = {
        ...user,
        id: Date.now(),
        token: token,
      };
      localStorage.clear();
      localStorage.setItem("user_details", JSON.stringify(userDetails));
      dispatch(loggedIn(userDetails));
    };
    if (isAuthenticated) {
      getToken();
    }
  }, [isAuthenticated]);

  const logOutHandler = () => {
    localStorage.clear();
    dispatch(loggedOut());
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  const logInHandler = () => {
    loginWithRedirect();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3 rounded shadow-sm">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand fw-bold text-primary">
          Hacker News
        </NavLink>
        <ul className="navbar-nav ms-auto d-flex align-items-center gap-3 flex-row">
          <li className="nav-item text-primary">
            <NavLink to="/admin/dashboard" className="nav-link">
              Admin
            </NavLink>
          </li>

          {isAuthenticated && (
            <li className="nav-item">
              <button
                onClick={logOutHandler}
                className="btn btn-outline-danger btn-sm"
              >
                Log out
              </button>
            </li>
          )}

          {!isAuthenticated && (
            <li className="nav-item">
              <button
                onClick={logInHandler}
                className="btn btn-outline-primary btn-sm"
              >
                Admin login in
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
