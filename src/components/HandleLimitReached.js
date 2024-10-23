import { React } from "react";

function HandleLimitReached(props) {
  let { onRetry, onContinue} = props;

  return (
    <div className="text-center">
      <h1>429</h1>
      <h3>API limit exhausted! Please try later.</h3>
      <div className="container d-flex justify-content-center">
        <button onClick={onRetry} className="btn btn-primary mt-3 mx-2">
          Retry
        </button>
        <button onClick={onContinue} className="btn btn-secondary mt-3 mx-2">
          Continue with Previous Results
        </button>
      </div>
    </div>
  );
}

export default HandleLimitReached;
