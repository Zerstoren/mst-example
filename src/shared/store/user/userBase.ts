import {flow, types} from "mobx-state-tree";
import User from "./user";
import {getUser} from "../../repository/user/user";
import {RootStore} from "../../../store";

export const UserBase = types.model("UserBase", {
  user: types.maybe(User)
}).actions((self) => {
  const setUser = flow(function* setUser(id: number | null) {
    if (id === null) {
      self.user = undefined;
      return;
    }

    const userData = yield getUser(id);
    if (userData && userData.data) {
      self.user = userData.data;
      RootStore.postsList.setLoginUser(userData.data.id);
    } else {
      // Do action for error process
    }
  });


  return {
    setUser
  };
})