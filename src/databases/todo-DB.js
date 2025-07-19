const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
mongoose
  .connect(process.env.mongoURI)
  .then(() => {
    console.log("database connected...");
  })
  .catch((e) => {
    console.log("database cannot be connected due to:", e);
  });
