import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "../../../store/auth/selector";
import { loggedIn, loggedOut } from "../../../store/auth/actions";
import { useNavigate } from "react-router";

const SignIn = () => {
  const [userCredentials, setUserCredentials] = useState({
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
    const userDetails = JSON.parse(localStorage.getItem("user_details"));
    if (userDetails?.token) {
      dispatch(loggedIn(userDetails));
      navigate("/admin/dashboard");
    }
  }, [dispatch, navigate]);

  const logInHandler = (e) => {
    e.preventDefault();
    const USER_DETAILS = {
      id: 1,
      fullname: `${userCredentials.firstName} ${userCredentials.lastName}`,
      email: userCredentials.email,
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      role: "super_admin",
    };
    localStorage.clear();
    localStorage.setItem("user_details", JSON.stringify(USER_DETAILS));
    dispatch(loggedIn(USER_DETAILS));
    navigate("/admin/dashboard");
  };

  const onFormValueChangeHandler = (e) => {
    setUserCredentials({
      ...userCredentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className="card shadow p-4 w-100" style={{ maxWidth: "420px" }}>
        <h3 className="text-center mb-4">Sign In</h3>
        <form onSubmit={logInHandler} className="d-grid gap-3">
          <div>
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              value={userCredentials.email}
              onChange={onFormValueChangeHandler}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              value={userCredentials.password}
              onChange={onFormValueChangeHandler}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
