import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default class App extends Component {
  switchTheme = () => {
    const element = document.body;
    const isDark = element.dataset.bsTheme === "dark";
    element.dataset.bsTheme = isDark ? "light" : "dark";
  };

  render() {
    return (
      <div>
        <Navbar title="NewsAPP" switchTheme={this.switchTheme} />
        <News pageSize={4}/>
      </div>
    );
  }
}
