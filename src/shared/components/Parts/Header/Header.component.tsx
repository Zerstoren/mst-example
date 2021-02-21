import Lang from "./components/Lang";
import Links from "./components/Links";
import LoginUser from "./components/LoginUser";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="left-side">
        <Links />
      </div>
      <div className="right-side">
        <LoginUser />
        <Lang />
      </div>
    </div>
  );
}


export default Header;
