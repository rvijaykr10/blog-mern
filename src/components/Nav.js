import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        LOGO
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          {/* <li className="nav-item">
            <Link className="nav-link" to="/">
              Dashboard
            </Link>
          </li> */}
          {/* <li className="nav-item">
            <Link className="nav-link" to="/editpage">
              Edit Page
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
