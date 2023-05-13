import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSearch } from "../../redux/actions/index";

export default function LoginForm() {
  let userLoged = useSelector((state) => state.user);
  const [input, setInput] = useState({ email: "", password: "" });

  const dispatch = useDispatch();

  let handleChange = (e) => {
    setInput((input) => {
      const newInput = {
        ...input,
        [e.target.name]: e.target.value,
      };
      return newInput;
    });
  };

  useEffect(() => {
    return () => {
      setInput({ email: "", password: "" });
    };
  }, []);

  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log(input);
    dispatch(userSearch(input));
  };

  return (
    <div className="loginContainer">
      <div>
        <img className="logo" src="./logo.png" alt="logo_img" />
        <form>
          <div className="formcontainer">
            <div className="label">
              <label>User email</label>
            </div>
            <div>
              <input
                className="input"
                type="text"
                name="email"
                value={input.email}
                onChange={(e) => handleChange(e)}
              ></input>
            </div>
            <div div className="label">
              <label>Password</label>
            </div>
            <div>
              <input
                className="input"
                type="password"
                name="password"
                value={input.password}
                onChange={(e) => handleChange(e)}
              ></input>
            </div>
            <div>
              <button className="button" onClick={(e) => handleSubmit(e)}>
                LOGIN
              </button>
            </div>
          </div>
          <label className="danger">
            {userLoged.length > 4 ? userLoged : null}
          </label>
        </form>
      </div>
    </div>
  );
}
