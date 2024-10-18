import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, desc, imgUrl, newsUrl } = this.props;

    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <div className="h-100">
            <img
              src={imgUrl}
              style={{ height: "30vh" }}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{desc}...</p>
              <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-primary btn-sm">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
