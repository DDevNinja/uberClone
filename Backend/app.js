
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");

const { connectToDb } = require("./db/db");
const userRoutes = require("./routes/user.routes");

const app = express();

connectToDb();

app.use(cors());
app.use(express.json());

// ❌ WRONG: app.post("/users", userRoutes);
// ✅ CORRECT:
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Ubar Clone Backend is running");
});

module.exports = app;
