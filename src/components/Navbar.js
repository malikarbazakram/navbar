import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="navbar-left">
        <a href="/">
          <img
            className="d-inline-block align-middle mr-2"
            src="./_logo.png"
            alt=""
            width="80"
          />
        </a>
      </div>

      <div className="navbar-right">
        <ul id="navbar" className="list-unstyled">
          <li>
            <a className="active" href="#"><b>Login</b></a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
