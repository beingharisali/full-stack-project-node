// const dotenv = require("dotenv");
// dotenv.config();
require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./database/connect");
const taskRouter = require("./routes/task");
const port = process.env.PORT;

connectDB();
app.use(express.json());
app.use("/", taskRouter);

app.listen(port, () => {
  console.log(`App is up and listening on port ${port}`);
});
