import React from "react";
import Article from "./Article";
import blogData from "../data/blog";

function ArticleList () {
    console.log(blogData)
    const MapData = blogData.posts.map(blog => {
        return (<Article 
        key = {blog.id}
        title = {blog.title}
        date = {blog.date}
        preview = {blog.preview}
        />)
    })
    return (
        <main>
            {MapData}
        </main>
    )
}

export default ArticleList