import { useEffect } from "react";
import { useAccessUserStore } from "../../../shared/store/user/access.user";
import { useAccessPostsListStore } from "../store/postsList";

export const useGetUserPosts = () => {
  const postStore = useAccessPostsListStore();
  const userStore = useAccessUserStore();

  useEffect(() => {
    postStore.load();
  }, [postStore]);

  if (!userStore) {
    return false;
  }

  return postStore.byUser(userStore.id);
}