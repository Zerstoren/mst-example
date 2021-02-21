import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import cn from "classnames";
import { useGetLoginUserName } from "../hooks/useLoginUser";
import { observer } from "mobx-react";
import { USERS_ROUTE } from "../../../../../components/Users/const";
import { POSTS_ROUTE } from "../../../../../components/Posts/const";
import { FORM_ROUTE } from "../../../../../components/Form/const";

const Links = () => {
  const location = useLocation();
  const loginUsername = useGetLoginUserName();
  
  return (
    <>
      <div className={cn(
        location.pathname === USERS_ROUTE && "active"
      )}>
        <NavLink to={USERS_ROUTE}>Users</NavLink>
      </div>
      <div className={cn(
        !loginUsername && "disabled",
        location.pathname === POSTS_ROUTE && "active"
      )}>
        {loginUsername ? <NavLink to={POSTS_ROUTE}>Posts</NavLink> : <>Posts</>}
      </div>
      <div className={cn(
        location.pathname === FORM_ROUTE && "active"
      )}>
        <NavLink to={FORM_ROUTE}>Form</NavLink>
      </div>
    </>
  )
}

export default observer(Links);
