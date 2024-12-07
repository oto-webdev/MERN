import express from "express";
import { login, me, register } from "../controller/userController.js";
import { protect } from '../middleware/auth.js'

const router = express.Router();

router.post("/", register);
router.post("/login", login);
router.get("/", protect, me);

export default router;
