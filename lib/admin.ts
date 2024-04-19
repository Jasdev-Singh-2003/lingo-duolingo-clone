import { auth } from "@clerk/nextjs";

const adminIds = [
  "user_2evD8xK6uKrlBjnxqldWmhYWubG",
];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};