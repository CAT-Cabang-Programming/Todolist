import express from "express";
import {
  addTodo,
  getAllCompletes,
  getAllIncompletes,
  updateTodo,
  deleteTodo,
} from "./todo.service.js";

const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const todoData = req.body;
    todoData.authorId = req.user.id;
    const newTodo = await addTodo(todoData);

    res.status(201).json({
      message: "Added new todo",
      data: newTodo,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Add new todo failed", error: err.message });
  }
});

router.get("/incomplete", async (req, res) => {
  try {
    const userId = req.user.id;
    const todos = await getAllIncompletes(userId);
    res.status(200).json({
      data: todos,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed getting data", error: err.message });
  }
});

router.get("/completed", async (req, res) => {
  try {
    const userId = req.user.id;
    const completeds = await getAllCompletes(userId);
    res.status(200).json({
      data: completeds,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed getting data", error: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const todoId = req.params.id;
    const todoData = req.body;

    await updateTodo(todoId, todoData);

    res.status(200).json({ message: "Update successful" });
  } catch (err) {
    res.status(500).json({ message: "Update failed", error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const todoId = req.params.id;

    await deleteTodo(todoId);

    res.status(200).json({ message: "Delete successful" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed" });
  }
});

export default router;
