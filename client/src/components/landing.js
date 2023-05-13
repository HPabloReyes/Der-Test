import { useSelector } from "react-redux";
import AuthorizedUser from "./authorizedUser";
import LoginForm from "./logInForm/logInForm";
import React from "react";
import "./landing.css";

export default function Landing() {
  let userLoged = useSelector((state) => state.user);

  return (
    <div>
      <div>
        {typeof userLoged === "object" ? (
          <AuthorizedUser></AuthorizedUser>
        ) : (
          <LoginForm></LoginForm>
        )}
      </div>
    </div>
  );
}
