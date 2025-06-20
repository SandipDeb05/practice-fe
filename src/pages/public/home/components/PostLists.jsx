const PostLists = ({ posts = [] }) => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Latest Posts</h2>
      <div className="row">
        {posts?.map((post) => (
          <div key={post.id} className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  by {post.author}
                </h6>
                <p className="card-text">{post.content}</p>
                <div className="mt-3">
                  <small className="text-muted">
                    Posted on {new Date(post.createdAt).toLocaleDateString()}
                  </small>
                  <div className="mt-2">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="badge bg-secondary me-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between text-muted">
                <span>👍 {post.likes}</span>
                <span>💬 {post.commentsCount} comments</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostLists;
