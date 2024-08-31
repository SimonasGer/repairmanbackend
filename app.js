const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const repairmanRouter = require("./routes/repairmanRoutes")

app.use(express.json());

const cors = require("cors");
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://reapirmanfrontend.vercel.app');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,PATCH,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }
    next();
  });

app.use("/users", userRoutes)
app.use("/repairman", repairmanRouter)

module.exports = app;