import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../model/User.js";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT, { expiresIn: "5m" });
};

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const exists = await User.findOne({ email });
  if (exists) {
    return res.status(409).json({ message: "Email exists" });
  }

  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(password, salt);

  try {
    const user = await User.create({
      name,
      email,
      password: hashed,
    });
    return res.status(201).json({
      message: "New User",
      _id: user.id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Fill in all fields" });
  }

  try {
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      return res.status(200).json({
        _id: user.id,
        name: user.name,
        email: user.email,
      });
    }else {
      return res.status(401).json({ message: "Invalid Credentials" });
    }
  }catch(error) {
    return res.status(500).json({ message: error.message });
  }
};

export const me = async (req, res) => {
  try {

  }catch(error) {
    return res.status(500).json({ message: error.message });
  }
};
