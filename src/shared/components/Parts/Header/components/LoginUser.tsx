import { observer } from "mobx-react";
import { useGetLoginUserName, useUserLogout } from "../hooks/useLoginUser";

const LoginUser = () => {
  const loginUsername = useGetLoginUserName();
  const logout = useUserLogout();

  if (loginUsername) {
    return <div className="user" onClick={logout}>{loginUsername}</div>;
  } else {
    return <div className="user">Login Pls</div>;
  }
}

export default observer(LoginUser);
