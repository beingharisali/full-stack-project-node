const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
  taskToBeDone: {
    type: String,
    required: [true, "Please full out this field"],
  },
});
const taskModel = mongoose.model("task", taskSchema);

module.exports = taskModel;
