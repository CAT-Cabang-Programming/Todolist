import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userController from "./src/user/user.controller.js";
import todoController from "./src/todo/todo.controller.js";
import authenticate from "./src/middleware/auth.middleware.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use("/user", userController);
app.use("/todos", authenticate, todoController);

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
