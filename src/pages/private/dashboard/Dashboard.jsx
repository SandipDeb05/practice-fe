import { useAuth0 } from "@auth0/auth0-react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Dashboard = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div className="container py-5">Loading...</div>;
  }

  return (
    <div className="container">
      {isAuthenticated ? (
        <div>
          <div>
            <h1>Dashbaord</h1>
          </div>
          <div className="alert alert-success shadow-sm" role="alert">
            <div className="d-flex align-items-center">
              <img
                src={user?.picture}
                alt="User Avatar"
                className="rounded-circle me-3"
                width={60}
                height={60}
                onError={(e) => {
                  e.target.src =
                    "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y";
                }}
              />
              <div>
                <h4 className="alert-heading mb-1">Welcome back!</h4>
                <p className="mb-0">
                  Hello, <strong>{user?.nickname}</strong> (
                  <code>{user?.email}</code>
                  ).
                </p>
              </div>
            </div>
          </div>
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
