const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const repairmanRouter = require("./routes/repairmanRoutes")

app.use(express.json());

const cors = require("cors");
app.use(cors());

app.use("/users", userRoutes)
app.use("/repairman", repairmanRouter)

module.exports = app;