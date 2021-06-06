import { types } from "mobx-state-tree";
import {useContext} from "react";
import {RootStoreContext} from "../../../store";

const Form = types.model("Form", {
  id: types.optional(types.number, 0),
  name: types.optional(types.string, ""),
}).actions((self) => ({
  setId(id: number) {
    self.id = id
  },
  setName(name: string) {
    self.name = name;
  }
}))

export const useAccessFormStore = () => {
  return useContext(RootStoreContext).form;
};

export default Form;
