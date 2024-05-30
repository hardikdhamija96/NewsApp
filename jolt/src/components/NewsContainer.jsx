import React, { useEffect, useState } from "react";
import "./NewsContainer.css";
import { HEADLINES_URL } from "../utils/links";
import { NEWS_IMG_UNAVAILABLE } from "../utils/links";

const NewsContainer = () => {
  const [newsHeadlines, setNewsHeadlines] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    fetch(HEADLINES_URL)
      .then((res) => res.json())
      .then((data) => {setNewsHeadlines(data.articles);
    setLoading(false);});
  }, []);

  return (
    <div>
      <h2 className="newsConatinerHeading">Read Top Headlines </h2>
      {loading? (<p className="loading">Fetching News ...</p>):(<div className="newsBox">
        {newsHeadlines.map((obj, index) => (
          <div key={index} className="newsArticle">
            <img
              src={obj.urlToImage ? obj.urlToImage : NEWS_IMG_UNAVAILABLE}
              alt={obj.title}
              className="newsImg"
            />
            <h3>{obj.title}</h3>
            <p>{obj.description}</p>
            <button>Click to read full News</button>
          </div>
        ))}
      </div>)}
    </div>
  );
};

export default NewsContainer;
