import express from "express";
import { Router } from "express";
import cors from "cors";
import {getAllTasks, getTaskById, createTask, deleteTask} from "../Controllers/taskController.js"

const router = Router()

router.get("/getTasks", getAllTasks);
router.get("/getTask/:id", getTaskById);
router.post("/newTask", createTask);
router.delete("/deleteTask/:id", deleteTask);

export default router;