import React, { Component } from "react";
import NewsItem from "./NewsItem";
import image from "../570914.png";
import data from "../DummyData.json";
import Spinner from "./Spinner";
import HandleLimitReached from "./HandleLimitReached";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: data.articles,
      loading: false,
      page: 1,
      totalArticle: data.totalResults,
      totalPage: 0,
      limitReached: false,
    };
  }

  fetchNews = async () => {
    this.setState({ loading: true });
    let newsAppUrl =
      this.props.url +
      `&apiKey=${process.env.REACT_APP_API_KEY}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let response = await fetch(newsAppUrl);

    if (response.status === 429) {
      this.setState({ limitReached: true, loading: false });
      return;
    } else if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    let parsedData = await response.json();
    this.setState(
      {
        articles: parsedData.articles,
        totalArticle: parsedData.totalResults,
        loading: false,
      },
      () => {
        this.countTotalPage();
      }
    );
  };

  async countTotalPage() {
    this.setState({
      totalPage: Math.ceil(this.state.totalArticle / this.props.pageSize),
    });
  }

  async componentDidMount() {
    const url = this.props.url;
    console.log(url);

    await this.fetchNews();
    await this.countTotalPage();
  }

  prevClick = async () => {
    this.setState(
      (prevState) => ({ page: prevState.page - 1 }),
      async () => {
        await this.fetchNews();
      }
    );
  };

  nextClick = async () => {
    this.setState(
      (prevState) => ({ page: prevState.page + 1 }),
      async () => {
        await this.fetchNews();
      }
    );
  };

  render() {
    if (this.state.limitReached) {
      return <HandleLimitReached />;
    }

    return (
      <div className="container">
        <div className="pb-4" />
        <h2 className="text-center mt-5 mb-3">
          NewsAPP - <i>Your daily news app!</i>
        </h2>
        {this.state.loading && <Spinner />}
        <div className="card">
          <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs  d-flex justify-content-center">
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="true"
                  href="https://newsapi.org/v2/everything?q=India&apiKey=8babfdc8702a451eb91e485f13bfd90f"
                >
                  India
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="true" href="/">
                  World
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Top-Headlines
                </a>
              </li>
            </ul>
          </div>
          <div className="card-body h-100">
            <div className="row text-center mx-2">
              {!this.state.loading &&
                this.state.articles
                  .filter((element) => !element.url.includes("removed.com"))
                  .map((element) => {
                    return (
                      <div key={element.url} className="col-md-3">
                        <NewsItem
                          className="text-truncate"
                          title={
                            element.title == null
                              ? "NewsAPP"
                              : element.title.slice(0, 40)
                          }
                          desc={
                            element.description == null
                              ? "NewsAPP"
                              : element.description.slice(0, 80)
                          }
                          imgUrl={
                            element.urlToImage == null
                              ? image
                              : element.urlToImage
                          }
                          newsUrl={element.url}
                        />
                      </div>
                    );
                  })}
            </div>
            <div className="d-flex justify-content-between text-center mx-2">
              <button
                type="button"
                disabled={this.state.page === 1}
                onClick={this.prevClick}
                className="btn btn-outline-success mx-3"
              >
                &larr; Previous
              </button>
              <button
                type="button"
                onClick={this.nextClick}
                disabled={this.state.totalPage === this.state.page}
                className="btn btn-outline-success mx-2"
              >
                Next &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
