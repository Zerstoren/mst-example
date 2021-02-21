import { flow, Instance, SnapshotIn, types } from "mobx-state-tree";
import { getUser } from "../../repository/user/user";
import type { IRootData } from "../rootStore";
import Address from "./address";
import Company from "./company";

const User = types.model("User", {
  id: types.number,
  name: types.string,
  username: types.string,
  email: types.string,
  phone: types.string,
  website: types.string,
  address: Address,
  company: Company,
});

export type TUserInstance = Instance<typeof User>;
export type TUserSnapshotIn = SnapshotIn<typeof User>;

export const rootUserAction = (self: IRootData) => {
  return flow(function* load(id: number | null) {
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
};

export default User;
