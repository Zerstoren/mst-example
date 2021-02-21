import { Instance, types } from "mobx-state-tree";

const Address = types.model("User.Address", {
  street: types.string,
  suite: types.string,
  city: types.string,
  zipcode: types.string,
  geo: types.model({
    lat: types.string,
    lng: types.string
  })
});

export type TAddressSnapshot = Instance<typeof Address>;

export default Address;
