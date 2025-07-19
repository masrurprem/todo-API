const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    priority: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const taskModel = new mongoose.model("taskModel", taskSchema);

module.exports = taskModel;
