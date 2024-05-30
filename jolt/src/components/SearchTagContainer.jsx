import React from "react";
import SearchTag from "./SearchTag";
import "../App.css";
import { NEWS_CATEGORIES } from "../utils/data";

const SearchTagContainer = ({onCategoryChange}) => {
  return (
    <div className="searchTagContainer">
      {NEWS_CATEGORIES.map((val, ind) => (
        <SearchTag key={ind} val={val} onCategoryChange={onCategoryChange}/>
      ))}
    </div>
  );
};

export default SearchTagContainer;
