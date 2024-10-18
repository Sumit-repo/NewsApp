import React, { Component } from "react";

export default class HandleLimitReached extends Component {
  handleRetry = () => {
    window.location.reload();
  };

  render() {
    return (
      <div className="text-center">
        <h1>429</h1>
        <h3>API limit exhausted! please try later</h3>
        <button onClick={this.handleRetry} className="btn btn-primary mt-3">
          Retry
        </button>
      </div>
    );
  }
}
