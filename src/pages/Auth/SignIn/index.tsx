import { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

import { Button } from "../../../components/Button";

import backgroundImg from "../../../assets/images/backgroundImg.jpg";

import "./style.scss";

type Error = {
  message: string;
};

export function SignIn() {
  const { user, signIn } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onHandleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/");
    } catch (error) {
      setError((error as unknown as Error).message);
      console.log((error as unknown as Error).message);
    }
  };

  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="sign-up-container">
      <img src={backgroundImg} alt="Netflix background" />

      <div className="overlay-container"></div>

      <div className="modal-container">
        <div className="modal-content">
          <h1>Sign In</h1>
          {error ? <div className="error-container">{error}</div> : null}

          <form onSubmit={onHandleSubmit}>
            <input
              type="email"
              placeholder="Email"
              className="input-text"
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="input-text"
              onChange={(event) => setPassword(event.target.value)}
            />
            <Button theme="red" text="Sign In" />
            <div className="info-container">
              <p>
                <input type="checkbox" />
                Remember me
              </p>
              <p>Need Help?</p>
            </div>
            <span>
              New to Netflix?{" "}
              <strong>
                <Link to="/signUp">Sign Up</Link>
              </strong>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}
