import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

import { Button } from "../../../components/Button";

import backgroundImg from "../../../assets/images/backgroundImg.jpg";

import "./style.scss";

export function SignUp() {
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onHandleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.log((error as unknown as Error).message);
    }
  };

  return (
    <div className="sign-up-container">
      <img src={backgroundImg} alt="Netflix background" />

      <div className="overlay-container"></div>

      <div className="modal-container">
        <div className="modal-content">
          <h1>Sign Up</h1>
          <form onSubmit={onHandleSubmit}>
            <input
              className="input-text"
              type="email"
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              className="input-text"
              type="password"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <Button theme="red" text="Sign Up" />
            <div className="info-container">
              <p>
                <input type="checkbox" />
                Remember me
              </p>
              <p>Need Help?</p>
            </div>
            <span>
              Already subscribed to NetFlix?{" "}
              <strong>
                <Link to="/signIn">Sign In</Link>
              </strong>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}
