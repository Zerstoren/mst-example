import { observer } from "mobx-react";
import React from "react";
import { useGetUserPosts } from "../hooks/usePosts";
import PostItem from "./PostItem";


const PostsList = () => {
  const posts = useGetUserPosts();

  return (
    <div className="posts-list">
      {posts && posts.map((post) => <PostItem post={post} />)}
    </div>
  );
}

export default observer(PostsList);
