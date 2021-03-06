import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center black-text"
            >
              <i className="material-icons">code</i>
              MERN
            </Link>
          </div>
            <Link
              to="/todos"
              style={{
                fontFamily: "monospace"
              }}
              className=" btn btn-lrg col s5 brand-logo center green accent-3 black-text"
            >
              TODOS
            </Link>
        </nav>
      </div>
    );
  }
}

export default Navbar;
