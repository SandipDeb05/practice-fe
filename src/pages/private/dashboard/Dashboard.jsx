import React from "react";
import { useSelector } from "react-redux";
import { authSelector } from "../../../store/auth/selector";

const Dashboard = () => {
  const auth = useSelector(authSelector);

  return <div>{auth.isLoggedIn && <h4>Hello, {auth.user.email}</h4>}</div>;
};

export default Dashboard;
