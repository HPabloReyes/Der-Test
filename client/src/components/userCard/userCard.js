import { useSelector, useDispatch } from "react-redux";
import { setShow, setAlert } from "../../redux/actions";
import LogOut from "../logOut/logOut";
import React, { useRef } from "react";
import "./userCard.css";

export default function UserCard() {
  let userLoged = useSelector((state) => state.user);
  let alert = useSelector((state) => state.alertLog);

  const dispatch = useDispatch();
  const bottomRef = useRef(null);

  const handleEdit = () => {
    dispatch(setShow(true));
    const bottomElementRef = bottomRef.current;
    bottomElementRef.scrollIntoView({ behavior: "smooth" });
  };

  const handleLogOut = () => {
    dispatch(setAlert(true));
  };

  return (
    <div>
      <div className="header">
        <h1>
          {userLoged.name.first} {userLoged.name.last}
        </h1>{" "}
      </div>
      {alert === true ? <LogOut /> : null}
      <div>
        <img
          className="profilePic"
          src={"./placeholder.png"}
          alt="user_image"
        ></img>
      </div>
      <div>
        <button onClick={handleLogOut} className="button2">
          LOGOUT
        </button>{" "}
        <button onClick={handleEdit} className="button2">
          EDIT
        </button>
      </div>
      <div className="mainCointainer">
        <div className="containerCard">
          <div className="inLine">
            <p>
              <b>Balance:</b>
            </p>
            <p>{userLoged.balance}</p>
          </div>
          <div className="inLine">
            <p>
              <b>Age:</b>
            </p>
            <p>{userLoged.age} years</p>
          </div>
          <div className="inLine">
            <p>
              <b>Company:</b>
            </p>
            <p>{userLoged.company}</p>
          </div>
          <div className="inLine">
            <p>
              <b>Phone:</b>
            </p>
            <p>{userLoged.phone}</p>
          </div>
          <div className="inLine">
            <p>
              <b>Email:</b>
            </p>
            <p>{userLoged.email}</p>
          </div>
          <div className="inLine">
            <p>
              <b>Address:</b>
            </p>
            <p>{userLoged.address}</p>
          </div>
        </div>
      </div>
      <div ref={bottomRef}></div>
    </div>
  );
}
