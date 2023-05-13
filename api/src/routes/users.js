import { Router } from "express";
import {
  editUser,
  getSingleUser,
  getUsers,
  postUser,
  userComparation,
} from "../controllers/users.controller.js";

const router = Router();

router.get("/users", getUsers);
router.get("/users/:id", getSingleUser);
router.post("/users", postUser);
router.put("/users/:id", editUser);
// router.delete("/users/:id", deleteUser);
router.post("/compare", userComparation);

export default router;
