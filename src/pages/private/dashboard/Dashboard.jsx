import { useSelector } from "react-redux";
import { authSelector } from "../../../store/auth/selector";

const Dashboard = () => {
  const auth = useSelector(authSelector);

  return (
    <div className="container py-5">
      {auth.isLoggedIn ? (
        <div className="alert alert-success shadow-sm" role="alert">
          <h4 className="alert-heading">Welcome back!</h4>
          <p className="mb-0">
            Hello, <strong>{auth.user?.email}</strong>. You're logged in to the
            admin dashboard.
          </p>
        </div>
      ) : (
        <div className="alert alert-warning" role="alert">
          You are not logged in.
        </div>
      )}
    </div>
  );
};

export default Dashboard;
