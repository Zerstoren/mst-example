import React from "react";
import HeaderComponent from "../../shared/components/Parts/Header/Header.component";
import UserLoginForm from "./components/UserLoginForm";
import UsersList from "./components/UsersList";
import "./Users.scss";

const UsersComponent = () => {
  return (
    <>
      <HeaderComponent />
      <div className="layout">
        <UserLoginForm />
        <UsersList />
      </div>
    </>
  );
}

export default UsersComponent;
