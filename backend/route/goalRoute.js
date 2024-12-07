import express from 'express'
import { createGoal, deleteGoal, getGoal, getGoals, updateGoal } from '../controller/goalController.js'

const router = express.Router()

router.get("/", getGoals)
router.post("/", createGoal)
router.get("/:id", getGoal)
router.put("/:id", updateGoal)
router.delete("/:id", deleteGoal)

export default router;