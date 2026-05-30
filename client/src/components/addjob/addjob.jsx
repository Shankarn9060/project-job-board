// pages/AddJob.js

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import API from "../api/api.jsx";

import Navbar from "../navbar/navbar.jsx";
import Footer from "../footer/footer.jsx";



function AddJob() {

  const navigate = useNavigate();




  // FORM STATE

  const [formData, setFormData] = useState({

    title: "",

    company: "",

    location: "",

    salary: "",

    description: "",

    type: "job",

    category: "Full Time",

    posted: "Just now",

    logo:
      "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",

    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085"

  });




  // SUCCESS ALERT

  const [showAlert, setShowAlert] = useState(false);




  // HANDLE INPUT CHANGE

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });

  };




  // HANDLE SUBMIT

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post("/jobs", formData);

      setShowAlert(true);




      // RESET FORM

      setFormData({

        title: "",

        company: "",

        location: "",

        salary: "",

        description: "",

        type: "job",

        category: "Full Time",

        posted: "Just now",

        logo:
          "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",

        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085"

      });




      // REDIRECT TO HOME

      setTimeout(() => {

        navigate("/");

      }, 1500);

    }

    catch (error) {

      console.log(error);

    }

  };




  return (

    <>

      <Navbar />



      <div className="container my-5">

        <div className="card add-job-card">

          <h2 className="text-center mb-4 fw-bold">

            Post a New Opportunity

          </h2>




          {/* SUCCESS ALERT */}

          {
            showAlert && (

              <div className="alert alert-success">

                Job Added Successfully

              </div>

            )
          }




          <form onSubmit={handleSubmit}>

            {/* JOB TITLE */}

            <input
              type="text"
              name="title"
              className="form-control mb-3"
              placeholder="Job Title"
              value={formData.title}
              onChange={handleChange}
              required
            />




            {/* COMPANY */}

            <input
              type="text"
              name="company"
              className="form-control mb-3"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
              required
            />




            {/* LOCATION */}

            <input
              type="text"
              name="location"
              className="form-control mb-3"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              required
            />




            {/* SALARY */}

            <input
              type="text"
              name="salary"
              className="form-control mb-3"
              placeholder="Salary"
              value={formData.salary}
              onChange={handleChange}
              required
            />




            {/* TYPE */}

            <select
              name="type"
              className="form-control mb-3"
              value={formData.type}
              onChange={handleChange}
            >

              <option value="job">
                Job
              </option>

              <option value="internship">
                Internship
              </option>

            </select>




            {/* CATEGORY */}

            <select
              name="category"
              className="form-control mb-3"
              value={formData.category}
              onChange={handleChange}
            >

              <option value="Full Time">
                Full Time
              </option>

              <option value="Remote">
                Remote
              </option>

              <option value="Hybrid">
                Hybrid
              </option>

              <option value="Internship">
                Internship
              </option>

            </select>




            {/* IMAGE URL */}

            <input
              type="text"
              name="image"
              className="form-control mb-3"
              placeholder="Image URL"
              value={formData.image}
              onChange={handleChange}
            />




            {/* LOGO URL */}

            <input
              type="text"
              name="logo"
              className="form-control mb-3"
              placeholder="Company Logo URL"
              value={formData.logo}
              onChange={handleChange}
            />




            {/* DESCRIPTION */}

            <textarea
              name="description"
              rows="5"
              className="form-control mb-4"
              placeholder="Job Description"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>




            {/* BUTTON */}

            <button className="btn btn-teal w-100">

              Post Job

            </button>

          </form>

        </div>

      </div>



      <Footer />

    </>

  );
}

export default AddJob;