import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

import { Button } from "../Button";

import logoImg from "../../assets/images/logoImg.svg";

import "./style.scss";

export function Header() {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const onHandleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="header-container">
      <Link to="/">
        <img src={logoImg} alt="Logo Netflix" />
      </Link>

      {user?.email ? (
        <>
          <div className="auth-container">
            <Link to="/account">Account</Link>
            <Button theme="red" text="Logout" onClick={onHandleLogout} />
          </div>
        </>
      ) : (
        <div className="auth-container">
          <Link to="/signIn">Sign In</Link>
          <Link to="/signUp">
            <Button theme="red" text="Sign Up" />
          </Link>
        </div>
      )}
    </div>
  );
}
