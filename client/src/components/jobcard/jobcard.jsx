// components/JobCard.js

import { Link } from "react-router-dom";

function JobCard({ job }) {

  return (

    <div className="col-lg-4 col-md-6 mb-4">

      <div className="card job-card h-100">

        <img
          src={job.image}
          alt={job.title}
          className="card-img-top"
        />



        <div className="card-body d-flex flex-column">

          {/* Company Logo */}

          <div className="d-flex align-items-center mb-3">

            <img
              src={job.logo}
              alt={job.company}
              className="company-logo"
            />

            <div className="ms-2">

              <h5 className="job-title mb-0">
                {job.title}
              </h5>

              <small className="company-name">
                {job.company}
              </small>

            </div>

          </div>



          {/* Badge */}

          <span className="badge bg-success mb-3">
            {job.category}
          </span>



          <p>📍 {job.location}</p>

          <p className="salary">
            💰 {job.salary}
          </p>

          <small className="text-muted mb-3">
            Posted {job.posted}
          </small>



          <div className="mt-auto">

            <Link
              to={`/jobs/${job.id}`}
              className="btn btn-teal w-100"
            >
              View Details
            </Link>

          </div>

        </div>

      </div>

    </div>

  );
}

export default JobCard;