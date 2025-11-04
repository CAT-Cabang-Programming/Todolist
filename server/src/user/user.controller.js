import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { createUser, getUserByName } from "./user.service.js";

dotenv.config();
const router = express.Router();
const secret = process.env.JWT_SECRET;

router.post("/register", async (req, res) => {
  const userData = req.body;

  try {
    await createUser(userData);
    res.status(201).json({ message: "User created" });
  } catch (err) {
    res
      .status(400)
      .json({ message: "User creation failed", error: err.message });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await getUserByName(username);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid Password" });
    }

    const token = jwt.sign(
      {
        id: user.id,
        username: user.username,
      },
      secret,
      { expiresIn: "1h" },
    );

    res.json({
      token,
      message: "Login successful",
    });
  } catch (err) {
    res.status(500).json({ message: "User login failed", error: err.message });
  }
});

export default router;
