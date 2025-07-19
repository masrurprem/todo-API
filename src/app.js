const express = require("express");
require("./databases/todo-DB");
const todoRouter = require("./routers/todo-router");
const app = express();

//port
const port = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use(todoRouter);

app.listen(port, (error) => {
  if (error) {
    console.log("server connection failure", error);
  }
  console.log("server connected successfully at port", port);
});
