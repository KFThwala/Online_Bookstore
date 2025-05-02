
import express from 'express';
import { getUsers,getUser, login, register, deleteUser, updateUser } from '../controllers/auth.controller.js';

const router = express.Router()

router.post("/register", register)
router.post("/login", login)
router.get("/getUsers", getUsers)
router.get("/getUser/:id", getUser)
router.delete("/deleteUser/:id", deleteUser)
router.put("/updateUser/:id", updateUser)


export default router