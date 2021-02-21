import { observer } from "mobx-react";
import cn from "classnames";
import { useGetLoginUserName, useUserLogout } from "./hooks/useLoginUser";
import "./Header.scss";
import { useChangeLanguage, useGetCurrentLanguage } from "./hooks/useSettings";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const loginUsername = useGetLoginUserName();
  const logout = useUserLogout();
  const currentLanguage = useGetCurrentLanguage();
  const selectLanguageEn = useChangeLanguage("en");
  const selectLanguageRu = useChangeLanguage("ru");
  const location = useLocation();

  const userBlock = loginUsername ? 
    <div className="user" onClick={logout}>{loginUsername}</div> : 
    <div className="user">Login Pls</div> ;

  return (
    <div className="header">
      <div className="left-side">
        <div className={cn(
          location.pathname === "/" && "active"
        )}>
          <NavLink to="/">Users</NavLink>
        </div>
        <div className={cn(
          !loginUsername && "disabled",
          location.pathname === "/posts" && "active"
        )}>
          {loginUsername ? <NavLink to="/posts">Posts</NavLink> : <>Posts</>}
        </div>
        <div className={cn(
          location.pathname === "/form" && "active"
        )}>
          <NavLink to="/form">Form</NavLink>
        </div>
      </div>
      <div className="right-side">
        {userBlock}
        <div 
          className={currentLanguage === "en" ? "active" : ""}
          onClick={currentLanguage === "en" ? undefined : selectLanguageEn}
        >Lang: En</div>
        <div 
          className={currentLanguage === "ru" ? "active" : ""}
          onClick={currentLanguage === "ru" ? undefined : selectLanguageRu}
        >Lang: Ru</div>
      </div>
    </div>
  );
}


export default observer(Header);
