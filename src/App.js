import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

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
      <div>
        <Navbar
          title="NewsAPP"
          background={` ${this.state.theme === "dark" ? "bg-dark" : "bg-light"}`}
          switchTheme={this.switchTheme}
        />
        <News pageSize={4} />
      </div>
    );
  }
}
