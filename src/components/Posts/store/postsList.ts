import { flow, types } from "mobx-state-tree";
import { useMemo } from "react";
import { getAllPosts } from "../repository/posts";
import PostItem from "./postItem";

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

  return {
    load
  };
});

export const useAccessPostsListStore = () => {
  return useMemo(() => PostsList.create({
    posts: []
  }), []);
};

export default PostsList;
