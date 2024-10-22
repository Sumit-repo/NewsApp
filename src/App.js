import "./App.css";
import News from "./components/News";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

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
        <LoadingBar
          color="#f11946"
          progress={this.state.progress}
          onLoaderFinished={() => this.setProgress(0)}
        />
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
                setProgress={this.setProgress}
                url={"https://newsapi.org/v2/top-headlines?category=general"}
                pageSize={10}
              />
            }
          />
          <Route
            path="/newsapp/home"
            element={
              <News
                setProgress={this.setProgress}
                url={"https://newsapi.org/v2/top-headlines?category=general"}
                pageSize={10}
              />
            }
          />

          <Route
            path="/newsapp/about"
            element={<AboutUs setProgress={this.setProgress} />}
          />

          <Route
            path="/newsapp/country/india"
            element={
              <News
                setProgress={this.setProgress}
                url={"https://newsapi.org/v2/everything?q=india"}
                pageSize={10}
              />
            }
          />
          <Route
            path="/newsapp/country/australia"
            element={
              <News
                setProgress={this.setProgress}
                url={"https://newsapi.org/v2/everything?q=australia"}
                pageSize={10}
              />
            }
          />
          <Route
            path="/newsapp/country/us"
            element={
              <News
                setProgress={this.setProgress}
                url={"https://newsapi.org/v2/everything?q=united+states"}
                pageSize={10}
              />
            }
          />
          <Route
            path="/newsapp/country/uk"
            element={
              <News
                setProgress={this.setProgress}
                url={"https://newsapi.org/v2/everything?q=united kingdom"}
                pageSize={10}
              />
            }
          />
          <Route
            path="/newsapp/country/uae"
            element={
              <News
                setProgress={this.setProgress}
                url={"https://newsapi.org/v2/everything?q=united arab emirates"}
                pageSize={10}
              />
            }
          />

          <Route
            path="/newsapp/category/business"
            element={
              <News
                setProgress={this.setProgress}
                url={"https://newsapi.org/v2/top-headlines?category=business"}
                pageSize={10}
              />
            }
          />
          <Route
            path="/newsapp/category/entertainment"
            element={
              <News
                setProgress={this.setProgress}
                url={
                  "https://newsapi.org/v2/top-headlines?category=entertainment"
                }
                pageSize={10}
              />
            }
          />
          <Route
            path="/newsapp/category/health"
            element={
              <News
                setProgress={this.setProgress}
                url={"https://newsapi.org/v2/top-headlines?category=health"}
                pageSize={10}
              />
            }
          />
          <Route
            path="/newsapp/category/science"
            element={
              <News
                setProgress={this.setProgress}
                url={"https://newsapi.org/v2/top-headlines?category=science"}
                pageSize={10}
              />
            }
          />
          <Route
            path="/newsapp/category/sports"
            element={
              <News
                setProgress={this.setProgress}
                url={"https://newsapi.org/v2/top-headlines?category=sports"}
                pageSize={10}
              />
            }
          />
          <Route
            path="/newsapp/category/technology"
            element={
              <News
                setProgress={this.setProgress}
                url={"https://newsapi.org/v2/top-headlines?category=technology"}
                pageSize={10}
              />
            }
          />
        </Routes>
      </Router>
    );
  }
}
