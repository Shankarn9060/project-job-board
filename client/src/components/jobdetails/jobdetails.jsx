// pages/JobDetails.js

import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import API from "../api/api.jsx";

import Navbar from "../navbar/navbar.jsx";
import Footer from "../footer/footer.jsx";

function JobDetails() {

  // Get job id from URL
  const { id } = useParams();

  // Store single job data
  const [job, setJob] = useState(null);



useEffect(() => {
  const fetchJob = async () => {
    try {
      const res = await API.get(`/jobs/${id}`);
      setJob(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchJob();
}, [id]);




  // Loading State
  if (!job) {

    return (
      <h3 className="text-center mt-5">
        Loading...
      </h3>
    );

  }




  return (

    <>

      <Navbar />



      <div className="container my-5">

        <div className="card job-details-card p-4">

            <img
            src={job.image}
            alt={job.title}
            className="job-details-img mb-4"
            />

          <h2 className="text-primary fw-bold mb-3">
            {job.title}
          </h2>



          <p>
            <strong>Company:</strong> {job.company}
          </p>

          <p>
            <strong>Location:</strong> {job.location}
          </p>

          <p>
            <strong>Salary:</strong> {job.salary}
          </p>



          <hr />



          <h5 className="fw-bold">
            Job Description
          </h5>

          <p>
            {job.description}
          </p>



          <button className="btn btn-teal mt-3">
            Apply Now
          </button>

        </div>

      </div>



      <Footer />

    </>

  );
}

export default JobDetails;
