import React from "react";
import { observer } from "mobx-react";
import { useGetUsersList } from "../hooks/useGetUsersList";
import UserItem from "./UserItem";

const UsersList = () => {
  const usersList = useGetUsersList();
  
  return (
    <>
      <div className="users-items">
        {usersList.users.map((user) => (<UserItem key={user.id} user={user} />))}
      </div>
    </>
  );
}

export default observer(UsersList);
