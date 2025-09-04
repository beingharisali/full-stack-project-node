// const dotenv = require("dotenv");
// dotenv.config();
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./database/connect");
const taskRouter = require("./routes/task");
const userRouter = require("./routes/user");
const port = process.env.PORT;

connectDB();
app.use(express.json());
app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use("/", taskRouter);
app.use("/", userRouter);

app.listen(port, () => {
  console.log(`App is up and listening on port ${port}`);
});
