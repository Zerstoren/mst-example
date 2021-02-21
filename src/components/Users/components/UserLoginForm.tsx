import { observer } from "mobx-react";
import React from "react";
import { useGetLoginUserName } from "../../../shared/components/Parts/Header/hooks/useLoginUser";
import { useLoginAction } from "../hooks/useGetUsersList";

const UserLoginForm = () => {
  const login = useLoginAction();
  const userName = useGetLoginUserName();

  if (userName) {
    return null;
  }

  const loginAction = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const userId = parseInt(formData.get("userId") as string);
    if (userId) {
      login(userId);
    }
  }

  return (
    <>
      <div className="login-form">
        <div>
          <form onSubmit={loginAction}>
            <input name="userId" placeholder="Set user id and type enter" />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default observer(UserLoginForm);
