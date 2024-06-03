import { Router } from "express";
import {getAllUsers, getUserById, createUser,login, deleteUser} from "../Controllers/userController.js"

const router = Router()

router.get("/getUsers", getAllUsers);
router.post("/login", login);
router.get("/getUser/:id", getUserById);
router.post("/newUser", createUser);
router.delete("/deleteUser/:id", deleteUser);

export default router;