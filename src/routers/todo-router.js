const express = require("express");
const todoRouter = express.Router();
const taskModel = require("../models/todo-model");

// endpoints

todoRouter.get("/tasks", async (req, res) => {
  try {
    const taskList = await taskModel.find({});
    res.status(200).send(taskList);
  } catch (e) {
    res.status(400).send(e);
  }
});

// adding new task
todoRouter.post("/addtask", async (req, res) => {
  try {
    const task = new taskModel(req.body);
    const addedTask = await task.save();
    res.status(201).send(addedTask);
  } catch (e) {
    res.status(400).send(e);
  }
});
// updating an existing task
todoRouter.patch("/updatetask/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updatedTask = await taskModel.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(200).send(updatedTask);
  } catch (e) {
    res.status(500).send(e);
  }
});

// delete a task
todoRouter.delete("/deletetask/:id", async (req, res) => {
  try {
    const deletedTask = await taskModel.findByIdAndDelete(req.params.id);
    res.status(200).send(deletedTask);
  } catch (e) {
    res.status(400).send(e);
  }
});

// export
module.exports = todoRouter;
