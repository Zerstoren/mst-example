import { useAccessUserStore } from "../../../shared/store/user/access.user";
import { useAccessPostsListStore } from "../store/postsList";

export const useGetUserPosts = () => {
  const postStore = useAccessPostsListStore();
  const userStore = useAccessUserStore();

  if (!userStore) {
    return false;
  }

  return postStore.posts;
}