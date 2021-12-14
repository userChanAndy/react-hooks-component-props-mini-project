import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import About from "./About"
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header 
      // name = "Underreacted"
      />
      <About
      // about = "All about Andy" 
      />
      <ArticleList />
    </div>
  );
}

export default App;
