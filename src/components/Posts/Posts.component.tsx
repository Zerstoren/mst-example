import { observer } from "mobx-react";
import React from "react";
import HeaderComponent from "../../shared/components/Parts/Header/Header.component";
import PostsList from "./components/PostsList";
import { useRedirectToHomeWhenUserNotAuth } from "./hooks/useRedirect";
import "./Posts.scss";

const PostsComponent = () => {
  const isRedirected = useRedirectToHomeWhenUserNotAuth();

  if (isRedirected) {
    return null;
  }

  return (
    <>
      <HeaderComponent />
      <div className="layout">
        <PostsList />
      </div>
    </>
  );
}

export default observer(PostsComponent);
