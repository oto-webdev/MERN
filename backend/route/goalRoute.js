import express from "express";
import {
  createGoal,
  deleteGoal,
  getGoal,
  getGoals,
  updateGoal,
} from "../controller/goalController.js";
import {protect} from '../middleware/auth.js'

const router = express.Router();

router.get("/", protect, getGoals);
router.post("/", protect, createGoal);
router.get("/:id", protect, getGoal);
router.put("/:id", protect, updateGoal);
router.delete("/:id", protect, deleteGoal);

export default router;
