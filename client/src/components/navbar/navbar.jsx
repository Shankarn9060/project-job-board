// components/Navbar.js

import { Link } from "react-router-dom";

function Navbar() {

  return (

    <nav className="navbar navbar-expand-lg navbar-dark sticky-top">

      <div className="container">

        <Link className="navbar-brand fw-bold" to="/">
          JobBoard
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/add-job">
                Add Job
              </Link>
            </li>

          </ul>

        </div>

      </div>

    </nav>

  );
}

export default Navbar;