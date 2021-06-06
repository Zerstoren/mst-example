import {flow, types} from "mobx-state-tree";
import User from "./user";
import {getUser} from "../../repository/user/user";

export const UserBase = types.model("UserBase", {
  user: types.maybe(User)
}).actions((self) => {
  const setUser = flow(function* setUser(id: number | null) {
    if (id === null) {
      self.user = undefined;
      return;
    }

    const userData = yield getUser(id);
    if (userData) {
      self.user = userData.data;
    } else {
      // Do action for error process
    }
  });


  return {
    setUser
  };
})