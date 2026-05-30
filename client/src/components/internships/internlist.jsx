// components/InternshipList.js

import JobCard from "../jobcard/jobcard.jsx";

function InternshipList({ internships }) {

  return (

    <div className="container job-list-section">

      <div className="d-flex justify-content-between align-items-center mb-4">

        <h4 className="fw-bold">
          Latest Internships
        </h4>

        <span className="text-muted">
          {internships.length} Internships Available
        </span>

      </div>



      <div className="row">

        {
          internships.map((job) => (

            <JobCard
              key={job.id}
              job={job}
            />

          ))
        }

      </div>

    </div>

  );
}

export default InternshipList;