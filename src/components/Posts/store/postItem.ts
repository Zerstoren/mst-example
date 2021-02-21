import { Instance, types } from "mobx-state-tree";

const PostItem = types.model("Post", {
  userId: types.number,
  id: types.number,
  title: types.string,
  body: types.string,
});

export type TPostItemInstance = Instance<typeof PostItem>;

export default PostItem;
