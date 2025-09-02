const taskModel = require("../models/Task");
const getTask = async (req, res) => {
  const id = req.params.id;
  const task = await taskModel.findById(id);
  res.status(200).json({ task });
};
const getTasks = async (req, res) => {
  const tasks = await taskModel.find({});
  res.status(200).json({
    tasks,
  });
};
const createTask = async (req, res) => {
  const task = await new taskModel({
    taskToBeDone: req.body.taskToBeDone,
  });
  await task.save();
  res.status(201).json({ task });
};

const deleteTask = async (req, res) => {
  const id = req.params.id;
  const task = await taskModel.findByIdAndDelete(id);
  res.status(200).json({ task });
};

const editTask = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const task = await taskModel.findByIdAndUpdate(id, body, { new: true });
  res.status(200).json({ task });
};

module.exports = { getTask, getTasks, createTask, editTask, deleteTask };
