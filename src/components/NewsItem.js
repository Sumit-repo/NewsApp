import React from "react";

export default function NewsItem(props) {
  let { title, desc, imgUrl, newsUrl, time, source } = props;

  function timeAgo(timestamp) {
    const now = new Date();
    const lastUpdate = new Date(timestamp);

    const seconds = Math.floor((now - lastUpdate) / 1000);

    let interval = Math.floor(seconds / 31536000); // seconds in a year
    if (interval >= 1)
      return `${interval} year${interval === 1 ? "" : "s"} ago`;

    interval = Math.floor(seconds / 2592000); // seconds in a month
    if (interval >= 1)
      return `${interval} month${interval === 1 ? "" : "s"} ago`;

    interval = Math.floor(seconds / 86400); // seconds in a day
    if (interval >= 1) return `${interval} day${interval === 1 ? "" : "s"} ago`;

    interval = Math.floor(seconds / 3600); // seconds in an hour
    if (interval >= 1)
      return `${interval} hour${interval === 1 ? "" : "s"} ago`;

    interval = Math.floor(seconds / 60); // seconds in a minute
    if (interval >= 1)
      return `${interval} minute${interval === 1 ? "" : "s"} ago`;

    return "just now";
  }

  return (
    <div className="my-3">
      <div className="card">
        <div>
          <img
            src={imgUrl}
            style={{ height: "30vh" }}
            className="card-img-top"
            alt="..."
          />
          <div className="card-img-overlay mx-3">
            <span className="badge text-bg-primary position-absolute start-0">
              {source}
            </span>
          </div>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{desc}...</p>
            <div className="d-flex justify-content-between">
              <a
                href={newsUrl}
                rel="noreferrer"
                target="_blank"
                className="btn btn-primary btn-sm"
              >
                Read More
              </a>
              <p className="card-text text-small">{timeAgo(time)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
