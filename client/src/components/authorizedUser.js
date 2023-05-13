import { useSelector } from "react-redux";
import EditUser from "./editUser/editUser";
import UserCard from "./userCard/userCard.js";
import React from "react";
import "./landing.css";

export default function AuthorizedUser() {
  let userLoged = useSelector((state) => state.user);
  let show = useSelector((state) => state.show);

  return (
    <div>
      {typeof userLoged === "object" ? (
        <UserCard></UserCard>
      ) : (
        <h1>
          {" "}
          Sorry, you do not have authorization to access this page, please
          register to continue{" "}
        </h1>
      )}
      <div>
        {show === true ? (
          <div className="transition">
            <EditUser />
          </div>
        ) : (
          <div className="hidden">
            <EditUser />
          </div>
        )}
      </div>
    </div>
  );
}
