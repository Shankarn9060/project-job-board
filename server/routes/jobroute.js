// routes/jobsRoutes.js

const express = require("express");
const router = express.Router();
const jobs = require("../data/jobs.js");



// GET ALL JOBS

router.get("/", (req, res) => {

  res.json(jobs);

});



// GET SINGLE JOB

router.get("/:id", (req, res) => {

  const job = jobs.find(

    (j) => j.id == req.params.id

  );

  res.json(job);

});



// ADD NEW JOB

router.post("/", (req, res) => {

  const newJob = {

    id: jobs.length + 1,

    ...req.body

  };



  jobs.push(newJob);



  res.status(201).json(newJob);

});



module.exports = router;