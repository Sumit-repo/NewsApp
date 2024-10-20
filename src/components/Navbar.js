import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav
          className={`navbar fixed-top navbar-expand-lg ${this.props.background}`}
        >
          <div className="container-fluid">
            <a className="navbar-brand mx-2" href="/">
              {this.props.title}
            </a>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item mx-2">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item dropdown mx-2">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Country
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/">
                        India
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Australia
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        United States
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        United Kingdom
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        United Arab Emirates
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown mx-2">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Category
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/">
                        Business
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Entertainment
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        General
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Health
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Science
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Sports
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Technology
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About
                  </a>
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
              <div class="vr ms-4"></div>
              <div className="form-check form-switch mx-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  onClick={this.props.switchTheme}
                  id="flexSwitchCheckDefault"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                >
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
