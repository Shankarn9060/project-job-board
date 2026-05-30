// components/JobList.js

import JobCard from "../jobcard/jobcard.jsx";

function JobList({ jobs }) {

  return (

    <div className="container job-list-section">

      {/* Job Count */}

      <div className="d-flex justify-content-between align-items-center mb-4">

        <h4 className="fw-bold">
          Latest Opportunities
        </h4>

        <span className="text-muted">
          {jobs.length} Jobs Available
        </span>

      </div>



      <div className="row">

        {
          jobs.length === 0 ? (

            <div className="text-center py-5">

              <h4>No jobs found</h4>

            </div>

          ) : (

            jobs.map((job) => (

              <JobCard
                key={job.id}
                job={job}
              />

            ))

          )
        }

      </div>

    </div>

  );
}

export default JobList;