import { flow, Instance, types } from "mobx-state-tree";
import { useMemo } from "react";
import User from "../../../shared/store/user/user";
import { getAllUsers } from "../repository/users";

const UsersList = types.model("Users.List", {
  users: types.array(User)
}).actions((self) => {
  const load = flow(function* load() {
    const userData = yield getAllUsers();

    if (userData) {
      self.users = userData.data;
    } else {
      // Do action for error process
    }
  });

  return {
    load
  };
});

export type TUsersListInstance = Instance<typeof UsersList>;

export const useAccessUsersListStore = () => {
  return useMemo(() => UsersList.create({
    users: []
  }), []);
}

export default UsersList;
