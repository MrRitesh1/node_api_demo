const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const userRoutes = require("./routes/user.routes");
const errorHandler = require("./middlewares/errorHandler");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

app.use(errorHandler); // Global error handler

module.exports = app;
