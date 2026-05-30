// pages/Home.js

import { useEffect, useState } from "react";

import API from "../api/api.jsx";

import Navbar from "../navbar/navbar.jsx";
import Hero from "../hero/hero.jsx";
import SearchBar from "../search/search.jsx";
import JobList from "../joblist/joblist.jsx";
import InternshipList from "../internships/internlist.jsx";
import Footer from "../footer/footer.jsx";



function Home() {

  const [jobs, setJobs] = useState([]);

  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);




  // FETCH JOBS

  useEffect(() => {

    fetchJobs();

  }, []);




  const fetchJobs = async () => {

    try {

      const res = await API.get("/jobs");

      setJobs(res.data);

      setLoading(false);

    }

    catch (error) {

      console.log(error);

      setLoading(false);

    }

  };




  // SEARCH FILTER

  const filteredJobs = jobs.filter((job) =>

    job.title.toLowerCase().includes(
      search.toLowerCase()
    )

  );




  // JOBS ONLY

  const jobsOnly = filteredJobs.filter(

    (job) => job.type === "job"

  );




  // INTERNSHIPS ONLY

  const internshipsOnly = filteredJobs.filter(

    (job) => job.type === "internship"

  );




  return (

    <>

      <Navbar />



      <Hero />



      <SearchBar
        search={search}
        setSearch={setSearch}
      />



      {
        loading ? (

          <div className="text-center my-5">

            <div className="spinner-border text-info"></div>

          </div>

        ) : (

          <>

            <JobList jobs={jobsOnly} />

            <InternshipList internships={internshipsOnly} />

          </>

        )
      }



      <Footer />

    </>

  );
}

export default Home;