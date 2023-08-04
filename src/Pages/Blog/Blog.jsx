import React from "react";
import "./Blog.css";
import { Link } from "react-router-dom";


import Navbar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/footer/Footer";

import soiling from './Images/soling.jpeg'



const BlogList = () => {
  const blogData = [
    {
      "id": 1,
      "title": "Why soling is done?",
      "image": soiling,
      "content": "Soling is done to provide a stable base to foundation and footing , before concreting work. Rubble or boulder soling is done to enhance the bearing capacity of soil, where hard strata are not available."
    },
    {
      "id": 2,
      "title": "Blog Post 2",
      "image": "image_url_2.jpg",
      "content": "This is the content of Blog Post 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
    },
    {
      "id": 3,
      "title": "Blog Post 3",
      "image": "image_url_3.jpg",
      "content": "This is the content of Blog Post 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
    },
    {
      "id": 4,
      "title": "Blog Post 4",
      "image": "image_url_3.jpg",
      "content": "This is the content of Blog Post 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
    }
  ]
  return (
    <>
    <div className="main-container">
      <Navbar />
    </div>
    <div className="blog-list">
      <h1>Blog</h1>
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