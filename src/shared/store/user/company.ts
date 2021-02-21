import { Instance, types } from "mobx-state-tree";

const Company = types.model("User.Company", {
  name: types.string,
  catchPhrase: types.string,
  bs: types.string
});

export type TCompanySnapshot = Instance<typeof Company>;

export default Company;
