// server.js

const express = require("express");

const cors = require("cors");

const jobsRoutes = require("./routes/jobroute.js");



const app = express();



// Middleware

app.use(cors());

app.use(express.json());



// Routes

app.use("/api/jobs", jobsRoutes);



// Server

app.listen(5000, () => {

  console.log("Server running on port 5000");

});