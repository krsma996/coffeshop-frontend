import "./login.css";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { useState } from "react";

export const Login: React.FC = () => {
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  const toggleForms = () => {
    setIsSignUpActive(!isSignUpActive);
  };

  return (
    <div className={`wrapper ${isSignUpActive ? "wrapper-active" : ""}`}>
      <div className="form-wrapper sign-in">
        <SignIn toggleForms={toggleForms} />
      </div>
      <div className="form-wrapper sign-up">
        <SignUp toggleForms={toggleForms} />
      </div>
    </div>
  );
};
