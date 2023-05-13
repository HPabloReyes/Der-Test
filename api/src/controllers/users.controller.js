import { v4 as uuid } from "uuid";
import { getConnection } from "../database.js";

export const getUsers = (req, res) => {
  try {
    const db = getConnection();
    res.send(db.data.users);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const getSingleUser = (req, res) => {
  const users = getConnection();
  const userFounded = users.data.users.find(
    (user) => user._id === req.params.id
  );
  if (!userFounded) res.status(404).send("user not found");
  res.send(userFounded);
  //console.log(userFounded);
};

export const postUser = async (req, res) => {
  const newUser = {
    _id: uuid(),
    name: req.body.name,
  };

  try {
    const db = getConnection();
    db.data.users.push(newUser);
    await db.write();

    console.log(db.data.users);
    res.json(newUser);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const editUser = async (req, res) => {
  const db = getConnection();
  const userFound = db.data.users.find((user) => user._id === req.params.id);
  if (!userFound) res.status(404).send("user not found");

  userFound.name.first = req.body.name.first;
  userFound.name.last = req.body.name.last;
  userFound.age = req.body.age;
  userFound.company = req.body.company;
  userFound.balance = req.body.balance;
  userFound.phone = req.body.phone;
  userFound.email = req.body.email;
  userFound.address = req.body.address;

  db.data.users.map((user) => (user._id === req.params.id ? userFound : user));

  await db.write();

  res.send(userFound);
};

// export const deleteUser = async (req, res) => {
//   const db = getConnection();
//   const userFound = db.data.users.find((user) => user._id === req.params.id);
//   if (!userFound) res.status(404).send("user not found");

//   const newUsersList = db.data.users.filter(
//     (user) => user._id !== req.params.id
//   );

//   db.data.users = newUsersList;
//   await db.write();

//   res.json(userFound);
//   //console.log(newUsersList);
// };

export const userComparation = (req, res) => {
  try {
    const users = getConnection();
    let inputEmail = req.body.email;
    let inputPassword = req.body.password;

    const userFound = users.data.users.find(
      (user) => user.email === inputEmail
    );
    const userPassword = users.data.users.find(
      (user) => user.password === inputPassword
    );

    //console.log("usuario", userFound);
    //console.log("contraseña", userPassword);

    if (userFound === userPassword) {
      res.send(userFound);
      console.log("useraproved", userFound);
    }
    if (!userFound) res.send("User is not registered");
    if (userFound && !userPassword) res.send("wrong Password");
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
