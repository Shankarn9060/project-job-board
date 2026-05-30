// server/server.js

const express = require("express");
const cors = require("cors");

const jobsRoutes = require("./routes/jobroute.js");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Job Board API is running successfully"
  });
});

// Jobs API Routes
app.use("/api/jobs", jobsRoutes);

// Export app for Vercel Serverless Functions
module.exports = app;
