import { useEffect } from "react";
import useBackdrop from "../../../hooks/useBackdrop";
import { useGetPostLists } from "../../../query/queryHooks/homeQueries";
import PostLists from "./components/PostLists";

const Home = () => {
  const { data: postLists, isLoading: isPostListLoading } = useGetPostLists();

  return (
    <div className="container">
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
