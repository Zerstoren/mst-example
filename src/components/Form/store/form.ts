import { types } from "mobx-state-tree";
import { useMemo } from "react";

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

const form = Form.create();

export const useAccessFormStore = () => useMemo(() => form, []);

export default Form;