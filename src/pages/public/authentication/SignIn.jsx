import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "../../../store/auth/selector";
import { loggedIn, loggedOut } from "../../../store/auth/actions";
import { useNavigate } from "react-router";

const SignIn = () => {
  const [userCredintials, setUserCredentials] = useState({
    email: "",
    password: "",
    phoneNumber: "",
    firstName: "",
    lastName: "",
  });
  const auth = useSelector(authSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const userDetials = JSON.parse(localStorage.getItem("user_details"));
    if (userDetials) dispatch(loggedIn(userDetials));
  }, []);

  const logInHandler = (e) => {
    e.preventDefault();
    console.log(userCredintials);
    const USER_DETAILS = {
      id: 1,
      fullname: `${userCredintials.firstName} ${userCredintials.lastName}`,
      email: userCredintials.email,
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
      role: "super_admin",
    };
    localStorage.clear();
    dispatch(loggedIn(USER_DETAILS));
    localStorage.setItem("user_details", JSON.stringify({ ...USER_DETAILS }));
    navigate("/admin/dashboard");
  };
  const logOutHandler = () => {
    localStorage.clear();
    dispatch(loggedOut());
  };

  const onFormValueChangeHandler = (e) => {
    setUserCredentials({
      ...userCredintials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className="container border border-1 p-3 mb-3 h-100 w-50">
        <h2 className="text-center mb-3">Sign in</h2>
        <form action="" className="d-flex flex-column gap-2 w-50 mx-auto">
          <div>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="form-control"
              value={userCredintials.email}
              onChange={onFormValueChangeHandler}
            />
          </div>
          <div>
            <label htmlFor="password" className="form-label">
              password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              value={userCredintials.password}
              onChange={onFormValueChangeHandler}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-sm"
            onClick={logInHandler}
          >
            Sign In
          </button>
        </form>
      </div>
      <div>
        {auth.isLoggedIn ? (
          <button onClick={logOutHandler} className="btn btn-danger btn-sm">
            Log out
          </button>
        ) : (
          <button onClick={logInHandler} className="btn btn-primary btn-sm">
            Log in
          </button>
        )}
      </div>
    </div>
  );
};

export default SignIn;
