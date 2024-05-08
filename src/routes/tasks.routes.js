import { Router } from "express";
import { authRequierd } from "../middlewares/validateToken.js";
import {
  getTasks,
  getTask,
  createTask,
  updateTasks,
  deleteTask,
} from "../controllers/tasks.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createTaskSchema } from "../schemas/task.schema.js";
const router = Router();

router.get("/tasks", authRequierd, getTasks);

router.get("/tasks/:id", authRequierd, getTask);

router.post(
  "/tasks",
  authRequierd,
  validateSchema(createTaskSchema),
  createTask
);

router.delete("/tasks/:id", authRequierd, deleteTask);

router.put("/tasks/:id", authRequierd, updateTasks);

export default router;
