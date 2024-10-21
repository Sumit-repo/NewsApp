import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav
          className={`navbar fixed-top navbar-expand-lg ${this.props.background}`}
        >
          <div className="container-fluid">
            <Link className="navbar-brand mx-2" to="/newsapp">
              {this.props.title}
            </Link>
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
                <li className="nav-item mx-2">
                  <Link className="nav-link" aria-current="page" to="/newsapp/home">
                    Home
                  </Link>
                </li>
                <li className="nav-item dropdown mx-2">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Country
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/newsapp/country/india">
                        India
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/newsapp/country/australia">
                        Australia
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/newsapp/country/us">
                        United States
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/newsapp/country/uk">
                        United Kingdom
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/newsapp/country/uae">
                        United Arab Emirates
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown mx-2">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Category
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/newsapp/category/business">
                        Business
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/newsapp/category/entertainment">
                        Entertainment
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/newsapp/category/health">
                        Health
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/newsapp/category/science">
                        Science
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/newsapp/category/sports">
                        Sports
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/newsapp/category/technology">
                        Technology
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/newsapp/about">
                    About
                  </Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
              <div className="vr ms-4"></div>
              <div className="form-check form-switch mx-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  onClick={this.props.switchTheme}
                  id="flexSwitchCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                  Dark Mode
                </label>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
