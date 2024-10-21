import "./App.css";
import News from "./components/News";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light",
    };
  }

  switchTheme = () => {
    const newTheme = this.state.theme === "dark" ? "light" : "dark";
    document.body.dataset.bsTheme = newTheme;
    this.setState({ theme: newTheme });
  };

  render() {
    return (
      <Router>
        <Navbar
          title="NewsAPP"
          background={` ${
            this.state.theme === "dark" ? "bg-dark" : "bg-light"
          }`}
          switchTheme={this.switchTheme}
        />
        <Routes>
          <Route
            path="/newsapp"
            element={
              <News
                url={"https://newsapi.org/v2/top-headlines?category=general"}
                pageSize={4}
              />
            }
          />
          <Route
            path="/newsapp/home"
            element={
              <News
                url={"https://newsapi.org/v2/top-headlines?category=general"}
                pageSize={4}
              />
            }
          />

          <Route path="/newsapp/about" element={<AboutUs />} />

          <Route
            path="/newsapp/country/india"
            element={
              <News
                url={"https://newsapi.org/v2/everything?q=india"}
                pageSize={4}
              />
            }
          />
          <Route
            path="/newsapp/country/australia"
            element={
              <News
                url={"https://newsapi.org/v2/everything?q=australia"}
                pageSize={4}
              />
            }
          />
          <Route
            path="/newsapp/country/us"
            element={
              <News
                url={"https://newsapi.org/v2/everything?q=united states"}
                pageSize={4}
              />
            }
          />
          <Route
            path="/newsapp/country/uk"
            element={
              <News
                url={"https://newsapi.org/v2/everything?q=united kingdom"}
                pageSize={4}
              />
            }
          />
          <Route
            path="/newsapp/country/uae"
            element={
              <News
                url={"https://newsapi.org/v2/everything?q=united arab emirates"}
                pageSize={4}
              />
            }
          />

          <Route
            path="/newsapp/category/business"
            element={
              <News
                url={"https://newsapi.org/v2/top-headlines?category=business"}
                pageSize={4}
              />
            }
          />
          <Route
            path="/newsapp/category/entertainment"
            element={
              <News
                url={
                  "https://newsapi.org/v2/top-headlines?category=entertainment"
                }
                pageSize={4}
              />
            }
          />
          <Route
            path="/newsapp/category/health"
            element={
              <News
                url={"https://newsapi.org/v2/top-headlines?category=health"}
                pageSize={4}
              />
            }
          />
          <Route
            path="/newsapp/category/science"
            element={
              <News
                url={"https://newsapi.org/v2/top-headlines?category=science"}
                pageSize={4}
              />
            }
          />
          <Route
            path="/newsapp/category/sports"
            element={
              <News
                url={"https://newsapi.org/v2/top-headlines?category=sports"}
                pageSize={4}
              />
            }
          />
          <Route
            path="/newsapp/category/technology"
            element={
              <News
                url={"https://newsapi.org/v2/top-headlines?category=technology"}
                pageSize={4}
              />
            }
          />
        </Routes>
      </Router>
    );
  }
}
