const express = require("express");
const router = express.Router();
const {
  getTask,
  createTask,
  getTasks,
  deleteTask,
  editTask,
} = require("../controllers/task");

router.get("/tasks/:id", getTask);

router.post("/create", createTask);

router.get("/tasks", getTasks);

router.delete("/tasks/:id", deleteTask);
router.patch("/tasks/:id", editTask);

module.exports = router;
