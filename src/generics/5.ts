export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type UserRoleNames = Record<UserRole, string>;

const RoleDescription: UserRoleNames = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};
