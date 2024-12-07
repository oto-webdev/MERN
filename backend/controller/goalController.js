import Goal from "../model/Goal.js";
import mongoose from "mongoose";

export const getGoals = async (req, res) => {
  try {
    const goal = await Goal.find();
    return res.status(200).json({ message: "All goals", goal });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createGoal = async (req, res) => {
  const { title } = req.body;
  if (!title) {
    res.status(401).json({ message: "title is required" });
  }

  try {
    const goal = await Goal.create({ title });
    return res.status(201).json({ message: "New goal", goal });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getGoal = async (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(401).json({ message: "Invalid Id" });
  }

  try {
    const goal = await Goal.findById(id);
    return res.status(200).json({ message: "Goal found", goal });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateGoal = async (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(401).json({ message: "Invalid Id" });
  }

  const updatedGoal = req.body;

  try {
    const goal = await Goal.findByIdAndUpdate(id, updatedGoal, { new: true });
    return res.status(200).json({ message: "Goal updated", goal });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteGoal = async (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(401).json({ message: "Invalid Id" });
  }

  try {
    const goal = await Goal.findByIdAndDelete(id);
    return res.status(200).json({ message: "Goal deleted", goal });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
