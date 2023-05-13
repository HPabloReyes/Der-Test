import { updateUser, setShow } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import "./editUser.css";

export default function EditUser() {
  const userLoged = useSelector((state) => state.user);

  const [input, setInput] = useState({
    name: { first: userLoged.name.first, last: userLoged.name.last },
    age: userLoged.age,
    company: userLoged.company,
    balance: userLoged.balance,
    phone: userLoged.phone,
    email: userLoged.email,
    address: userLoged.address,
  });
  const [formError, setFormError] = useState({});

  const ID = userLoged._id;
  //   console.log("_id", id);
  const dispatch = useDispatch();

  const handleChangeNames = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      name: {
        ...prevInput.name,
        [name]: value,
      },
    }));
  };

  const valiateInput = (input) => {
    let errors = {};

    if (!/^[0-9_\s]{1,40}$/.test(input.age))
      errors.age = "Age can only contain numbers";
    if (/[a-zA-Z]/.test(input.phone))
      errors.phone = "Phone can not contain letters";
    if (/[a-zA-Z]/.test(input.balance))
      errors.balance = "Balance can not contain letters";
    return errors;
  };

  const handleChange = (e) => {
    setInput((input) => {
      const newInput = {
        ...input,
        [e.target.name]: e.target.value,
      };
      const errors = valiateInput(newInput);
      setFormError(errors);
      return newInput;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    dispatch(updateUser(ID, input));
    dispatch(setShow(false));
  };

  const handleClose = () => {
    dispatch(setShow(false));
  };

  useEffect(() => {
    return () => {
      dispatch(setShow(false));
    };
  }, [dispatch]);

  return (
    <div className="mainCointainer">
      <div className="errorContainer">
        {formError.balance && <p className="error">{formError.balance}</p>}
        {formError.age && <p className="error">{formError.age}</p>}
        {formError.phone && <p className="error">{formError.phone}</p>}
      </div>
      <div className="containerEdit">
        <form onSubmit={handleSubmit}>
          <button onClick={handleClose} className="button2">
            CANCEL
          </button>
          <div>
            <label className="label">First Name:</label>
            <input
              className="input"
              name="first"
              onChange={(e) => handleChangeNames(e)}
              value={input.name.first}
            ></input>
          </div>
          <div>
            <label className="label">Last Name:</label>
            <input
              className="input"
              name="last"
              onChange={(e) => handleChangeNames(e)}
              value={input.name.last}
            ></input>
          </div>
          <div>
            <label className="label">Age:</label>
            <input
              className="input"
              name="age"
              onChange={(e) => handleChange(e)}
              value={input.age}
            ></input>
          </div>
          <div>
            <label className="label">Company:</label>
            <input
              className="input"
              name="company"
              onChange={(e) => handleChange(e)}
              value={input.company}
            ></input>
          </div>
          <div>
            <label className="label">Balance:</label>
            <input
              className="input"
              name="balance"
              onChange={(e) => handleChange(e)}
              value={input.balance}
            ></input>
          </div>
          <div>
            <label className="label">Phone:</label>
            <input
              className="input"
              name="phone"
              onChange={(e) => handleChange(e)}
              value={input.phone}
            ></input>
          </div>
          <div>
            <label className="label">Address:</label>
            <input
              className="input"
              name="address"
              onChange={(e) => handleChange(e)}
              value={input.address}
            ></input>
          </div>
          <button
            disabled={Object.entries(formError).length >= 1}
            className="button2"
          >
            UPDATE
          </button>
        </form>
      </div>
    </div>
  );
}
