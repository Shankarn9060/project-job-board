const express = require("express");
const cors = require("cors");

const jobsRoutes = require("./routes/jobroute.js");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Job Board API Running"
  });
});

app.use("/api/jobs", jobsRoutes);

module.exports = app;
