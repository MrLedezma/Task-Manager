import { Router } from "express";
import { authRequierd } from "../middlewares/validateToken.js";

const router = Router();

router.get("/tasks", authRequierd, (req, res) => res.send("tasks"));

export default router;
