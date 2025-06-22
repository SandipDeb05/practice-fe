const ROLES = {
  admin: ["view:posts", "create:posts", "update:posts", "delete:posts"],
  moderator: ["view:posts", "create:posts", "update:posts"],
  user: ["view:posts"],
};

function hasAccess(user, permission) {
  return ROLES[user.role].includes(permission);
}
