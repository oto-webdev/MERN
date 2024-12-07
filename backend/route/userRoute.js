import express from "express";
import { login, me, register } from "../controller/userController.js";

const router = express.Router();

router.post("/", register);
router.post("/login", login);
router.get("/", me);

export default router;
