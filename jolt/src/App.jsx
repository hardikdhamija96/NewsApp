import { useState } from "react";
import "./App.css";
import SearchTagContainer from "./components/SearchTagContainer";
import NewsContainer from "./components/NewsContainer";
import Footer from "./components/Footer";
import { HEADLINES_URL } from "./utils/links";
import Axios from "axios";

function App() {
  // fetch(HEADLINES_URL).then((res)=>res.json()).then((data)=> console.log(data));

  // Axios.get(HEADLINES_URL).then((res)=>console.log(res.data.articles));

  const [selectedCategory,setSelectedCategory]=useState("general");

  const handleCategoryChange = (category) =>{
    setSelectedCategory(category);
  }

  return (
    <div className="app">
      <h1 className="mainHeading">Jolt</h1>
      <h2 className="subMainHeading">Jolt Your World with News.</h2>
      <SearchTagContainer onCategoryChange={handleCategoryChange}/>
      <input type="text" className="newsSearchBar" placeholder="Type here..." />

      <NewsContainer selectedCategory={selectedCategory}/>
      <Footer />
    </div>
  );
}

export default App;
