import "./App.css";
import News from "./components/News";
import { React, useState } from "react";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const pageSize = 10;
  const [progress, setProgress] = useState(0);
  const [theme, setTheme] = useState("light");

  const switchTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.body.dataset.bsTheme = newTheme;
    setTheme(newTheme);
  };

  return (
    <Router>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar
        title="NewsAPP"
        background={` ${theme === "dark" ? "bg-dark" : "bg-light"}`}
        switchTheme={switchTheme}
      />
      <Routes>
        <Route
          path="/newsapp"
          element={
            <News
              setProgress={setProgress}
              url={"https://newsapi.org/v2/top-headlines?category=general"}
              pageSize={pageSize}
            />
          }
        />
        <Route
          path="/newsapp/home"
          element={
            <News
              setProgress={setProgress}
              url={"https://newsapi.org/v2/top-headlines?category=general"}
              pageSize={pageSize}
            />
          }
        />

        <Route
          path="/newsapp/about"
          element={<AboutUs setProgress={setProgress} />}
        />

        <Route
          path="/newsapp/country/india"
          element={
            <News
              setProgress={setProgress}
              url={"https://newsapi.org/v2/everything?q=india"}
              pageSize={pageSize}
            />
          }
        />
        <Route
          path="/newsapp/country/australia"
          element={
            <News
              setProgress={setProgress}
              url={"https://newsapi.org/v2/everything?q=australia"}
              pageSize={pageSize}
            />
          }
        />
        <Route
          path="/newsapp/country/us"
          element={
            <News
              setProgress={setProgress}
              url={"https://newsapi.org/v2/everything?q=united+states"}
              pageSize={pageSize}
            />
          }
        />
        <Route
          path="/newsapp/country/uk"
          element={
            <News
              setProgress={setProgress}
              url={"https://newsapi.org/v2/everything?q=united kingdom"}
              pageSize={pageSize}
            />
          }
        />
        <Route
          path="/newsapp/country/uae"
          element={
            <News
              setProgress={setProgress}
              url={"https://newsapi.org/v2/everything?q=united arab emirates"}
              pageSize={pageSize}
            />
          }
        />

        <Route
          path="/newsapp/category/business"
          element={
            <News
              setProgress={setProgress}
              url={"https://newsapi.org/v2/top-headlines?category=business"}
              pageSize={pageSize}
            />
          }
        />
        <Route
          path="/newsapp/category/entertainment"
          element={
            <News
              setProgress={setProgress}
              url={
                "https://newsapi.org/v2/top-headlines?category=entertainment"
              }
              pageSize={pageSize}
            />
          }
        />
        <Route
          path="/newsapp/category/health"
          element={
            <News
              setProgress={setProgress}
              url={"https://newsapi.org/v2/top-headlines?category=health"}
              pageSize={pageSize}
            />
          }
        />
        <Route
          path="/newsapp/category/science"
          element={
            <News
              setProgress={setProgress}
              url={"https://newsapi.org/v2/top-headlines?category=science"}
              pageSize={pageSize}
            />
          }
        />
        <Route
          path="/newsapp/category/sports"
          element={
            <News
              setProgress={setProgress}
              url={"https://newsapi.org/v2/top-headlines?category=sports"}
              pageSize={pageSize}
            />
          }
        />
        <Route
          path="/newsapp/category/technology"
          element={
            <News
              setProgress={setProgress}
              url={"https://newsapi.org/v2/top-headlines?category=technology"}
              pageSize={pageSize}
            />
          }
        />
      </Routes>
    </Router>
  );
}
