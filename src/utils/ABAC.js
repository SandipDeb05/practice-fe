const parts = "Subject, Action, Resource, Other Information (Env, Org, etc)";

const user = {
  role: "doctor",
  department: "oncology",
};

const post = {
  id: 1,
  department: "oncology",
  sensitivity: "low",
};

function canAccessPost(user, post) {
  return user.department === post.department && post.sensitivity !== "high";
}
