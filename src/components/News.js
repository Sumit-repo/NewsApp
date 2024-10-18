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
    const apiKey = process.env.REACT_APP_API_KEY;
    let url = `https://newsapi.org/v2/everything?q=india&apiKey=${apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let response = await fetch(url);

    if (response.status === 429) {
      this.setState({ limitReached: true, loading: false }); // Update state to show the limit-reached message
      return; // Stop further execution
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
      return <HandleLimitReached />; // Render the limit-reached component
    }

    return (
      <div className="container my-3">
        <h1 className="text-center my-5">NewsAPP - Your daily news app!</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {this.state.articles
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
                      element.urlToImage == null ? image : element.urlToImage
                    }
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
        </div>
        <div className="d-flex justify-content-between pr-4">
          <button
            type="button"
            disabled={this.state.page === 1}
            onClick={this.prevClick}
            className="btn btn-outline-success"
          >
            &larr; Previous
          </button>
          <button
            type="button"
            onClick={this.nextClick}
            disabled={this.state.totalPage === this.state.page}
            className="btn btn-outline-success"
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
