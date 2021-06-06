import { Instance, types } from "mobx-state-tree";
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


export default User;
