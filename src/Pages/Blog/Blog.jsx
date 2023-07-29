import React from "react";
import "./Blog.css";
import { Link } from "react-router-dom";
import blogData from "./data.json";

import Navbar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/footer/Footer";



const BlogList = () => {
  return (
    <>
    <div className="main-container">
      <Navbar />
    </div>
    <div className="blog-list">
      {blogData.map((blog) => (
        <div className="blog-item" key={blog.id}>
          <h2>{blog.title}</h2>
          <img src={blog.image} alt={blog.title} />
          <p>{blog.content.substring(0, 200)}...</p>
          <Link to={`/blog/${blog.id}`}>
            <button>Read More</button>
          </Link>
        </div>
      ))}
    </div>
    <Footer />
   </>
    
  );
};

export default BlogList;