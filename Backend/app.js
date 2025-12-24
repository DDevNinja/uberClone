const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");

const { connectToDb } = require("./db/db");
const userRoutes = require("./routes/user.routes.js");
const capatainRoutes = require("./routes/capatain.routes.js");

const app = express();

connectToDb();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json());

app.use("/users", userRoutes);
app.use("/captains", capatainRoutes);

app.get("/", (req, res) => {
  res.send("Ubar Clone Backend Running 🚀");
});

module.exports = app;
