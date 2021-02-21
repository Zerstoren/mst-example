import { observer } from "mobx-react";
import React, { FC } from "react";
import { useAccessUserStore } from "../../../shared/store/user/access.user";
import { TUserInstance } from "../../../shared/store/user/user";

interface IUserItem {
  user: TUserInstance
}

const UserItem : FC<IUserItem> = ({user}) => {
  const loginUser = useAccessUserStore();

  return (
    <>
      <div className={loginUser?.id === user.id ? "user-card-item active" : "user-card-item"}>
        <div>Id: {user.id}</div>
        <div>Name: {user.username}</div>
        <div>Email: {user.email}</div>
        <div>Phone: {user.phone}</div>
        <div>Website: {user.website}</div>
      </div>
    </>
  );
}

export default observer(UserItem);
