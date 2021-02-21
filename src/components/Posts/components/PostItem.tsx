import { observer } from "mobx-react";
import { FC } from "react";
import { useAccessSettingsStore } from "../../../shared/store/settings/access.settings";
import { TPostItemInstance } from "../store/postItem";

interface IPostItem {
  post: TPostItemInstance
}

const PostItem : FC<IPostItem> = ({post}) => {
  const lang = useAccessSettingsStore().lang;

  return (
    <div className="post-item">
      <div>Lang: {lang}</div>
      <div>Id: {post.id}</div>
      <div>Title: {post.title}</div>
      <div>Body: {post.body}</div>
    </div>
  )
}

export default observer(PostItem);
