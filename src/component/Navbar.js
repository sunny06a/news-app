//import PropTypes from "prop-types";
import React, { Component } from "react";
import {link} from "react-router-dom"
export class Navbar extends Component {
  //static propTypes = {};

  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <link className="navbar-brand" to="/">
            Daily News
          </link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <link className="nav-link" aria-current="page" to="/">
                  Home
                </link>
              </li>
              <li className="nav-item"><link className="nav-link" to="/business">Business</link></li>
              <li className="nav-item"><link className="nav-link" to="/entertainment">Entertainment</link></li>
              <li className="nav-item"><link className="nav-link" to="/general">General</link></li>
              <li className="nav-item"><link className="nav-link" to="/health">Health</link></li>
              <li className="nav-item"><link className="nav-link" to="/sciencce">Science</link></li>
              <li className="nav-item"><link className="nav-link" to="/sports">Sports</link></li>
              <li className="nav-item"><link className="nav-link" to="/techonology">Technology</link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
