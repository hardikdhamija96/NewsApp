import React from "react";
import "./SearchTag.css";

const SearchTag = ({val,onCategoryChange}) => {
  
  const handleClick = () =>{
    onCategoryChange(val.toLowerCase());
  };
  
  return (<button className="searchTag" onClick={handleClick}>{val}</button>);
};

export default SearchTag;
