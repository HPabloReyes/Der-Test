import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAlert, reset } from "../../redux/actions";
import "./logOut.css";

export default function LogOut() {
  const dispatch = useDispatch();

  const handleNo = () => {
    dispatch(setAlert(false));
  };

  const handleYes = () => {
    dispatch(reset());
  };

  useEffect(() => {
    return () => {
      dispatch(setAlert(false));
    };
  }, [dispatch]);

  return (
    <div className="containerAlert">
      <div className="buttonContainer">
        <p onClick={handleYes} className="button3">
          Yes
        </p>
      </div>
      <p className="balancedesc">
        {" "}
        <b>Are you sure you want to log out?</b>{" "}
      </p>
      <div className="buttonContainer">
        <p onClick={handleNo} className="button3">
          No
        </p>
      </div>
    </div>
  );
}
