import { useNavigate } from "react-router";
import { useGetPostLists } from "../../../query/queryHooks/homeQueries";

const Home = () => {
  const navigate = useNavigate();
  const { data: postLists, isLoading: isPostListLoading } = useGetPostLists();

  const switchToAdminHandler = () => {
    navigate("/admin/dashboard");
  };

  console.log(postLists);

  return (
    <div>
      <h2>Home Page</h2>
      {isPostListLoading ? (
        <p>Loading...</p>
      ) : !isPostListLoading && postLists?.length > 0 ? (
        <div>
          {postLists.map((post) => {
            return <h6 key={post.id}>{post.title}</h6>;
          })}
        </div>
      ) : (
        <p>No post</p>
      )}
      <button className="btn btn-primary btn-sm" onClick={switchToAdminHandler}>
        Switch to admin
      </button>
    </div>
  );
};

export default Home;
