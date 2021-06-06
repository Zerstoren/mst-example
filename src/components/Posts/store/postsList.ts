import { flow, types, cast } from "mobx-state-tree";
import { getAllPosts } from "../repository/posts";
import PostItem from "./postItem";
import {useRootStore} from "../../../store";

const PostsList = types.model("PostsList", {
  posts: types.array(PostItem)
}).views((self) => ({
  byUser(userId: number) {
    return self.posts.filter((post) => post.userId === userId)
  }
})).actions((self) => {
  const load = flow(function* load() {
    const postsData = yield getAllPosts();

    if (postsData) {
      self.posts = postsData.data;
    } else {
      // Do action for error process
    }
  });

  const setLoginUser = flow(function* setLoginUser(userId: number) {
    yield load();
    self.posts = cast(self.posts.filter((post) => post.userId === userId));
  });

  return {
    load,
    setLoginUser,
  };
});

export const useAccessPostsListStore = () => {
  return useRootStore().postsList;
};

export default PostsList;
