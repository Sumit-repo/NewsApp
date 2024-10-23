import NewsItem from "./NewsItem";
import data from "../DummyData.json";
import { useState, useEffect } from "react";
import HandleLimitReached from "./HandleLimitReached";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const [articles, setArticles] = useState(data.articles);
  const [page, setPage] = useState(1);
  const [totalArticle, setTotalArticle] = useState(0);
  const [limitReached, setLimitReached] = useState(false);
  const [showOldData, setShowOldData] = useState(false);

  const fetchNews = async () => {
    if (showOldData) return;
    try {
      props.setProgress(0);
      let newsAppUrl = `${props.url}&apiKey=${process.env.REACT_APP_API_KEY}&page=${page}&pageSize=${props.pageSize}`;
      let response = await fetch(newsAppUrl);
      props.setProgress(40);

      if (response.status === 429) {
        props.setProgress(80);
        return setLimitReached(true);
      } else if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      let parsedData = await response.json();
      setArticles(parsedData.articles);
      setTotalArticle(parsedData.totalResults);
      props.setProgress(100);
    } catch (error) {
      console.error("Error fetching news:", error);
      props.setProgress(100);
    }
  };

  const fetchData = async () => {
    if (showOldData) return;
    try {
      props.setProgress(80);
      let newsAppUrl = `${props.url}&apiKey=${
        process.env.REACT_APP_API_KEY
      }&page=${page + 1}&pageSize=${props.pageSize}`;
      let response = await fetch(newsAppUrl);

      if (response.status === 429) {
        props.setProgress(80);
        return setLimitReached(true);
      } else if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      let parsedData = await response.json();
      setArticles([...articles, ...parsedData.articles]);
      setTotalArticle(parsedData.totalResults);
      setPage(page + 1);
      props.setProgress(100);
    } catch (error) {
      console.error("Error fetching more news:", error);
      props.setProgress(100);
    }
  };

  useEffect(() => {
    setPage(1);
    if (!showOldData) {
      fetchNews();
    }
  }, [props.url]);

  const handleRetry = () => {
    setLimitReached(false);
    setShowOldData(false);
  };

  const handleContinue = async () => {
    setShowOldData(true);
    setArticles(data.articles);
  };

  if (limitReached) {
    props.setProgress(100);
    return (
      <HandleLimitReached onRetry={handleRetry} onContinue={handleContinue} />
    );
  }

  return (
    <div className="container">
      <div className="pb-4" />
      <h2 className="text-center mt-5 mb-3">
        NewsAPP - <i>Your daily news app!</i>
      </h2>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchData}
        hasMore={articles.length !== totalArticle && !showOldData}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="row mx-2">
          {articles
            .filter((element) => !element.url.includes("removed.com"))
            .map((element, index) => {
              return (
                <div key={index} className="col-md-3">
                  <NewsItem
                    className="text-truncate"
                    title={
                      element.title == null
                        ? "NewsAPP"
                        : element.title.slice(0, 45)
                    }
                    desc={
                      element.description == null
                        ? "NewsAPP"
                        : element.description.slice(0, 80)
                    }
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                    time={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
      </InfiniteScroll>
    </div>
  );
}
