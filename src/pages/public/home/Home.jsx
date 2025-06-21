import { useNavigate } from "react-router";
import { useGetPostLists } from "../../../query/queryHooks/homeQueries";
import PostLists from "./components/PostLists";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth0();
  const { data: postLists, isLoading: isPostListLoading } = useGetPostLists();

  const switchToAdminHandler = () => {
    navigate("/admin/dashboard");
  };

  return (
    <div className="container py-5">
      {isAuthenticated && (
        <div className="d-flex justify-content-between align-items-center mb-4">
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={switchToAdminHandler}
          >
            Switch to Admin
          </button>
        </div>
      )}

      {isPostListLoading ? (
        <div className="text-center my-5">
          <div className="spinner-border text-primary" role="status" />
          <p className="mt-3">Loading posts...</p>
        </div>
      ) : postLists?.length > 0 ? (
        <PostLists posts={postLists} />
      ) : (
        <div className="alert alert-warning" role="alert">
          No posts available at the moment.
        </div>
      )}
    </div>
  );
};

export default Home;
