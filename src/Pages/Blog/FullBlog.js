import React from "react";
import { useParams} from "react-router-dom";
import './FullBlog.css'

import soiling from './Images/soling.jpeg'

const FullBlog = () => {

  const blogData =[
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
    }
  ]

  const { id } = useParams();
  const blogId = parseInt(id);
  const blog = blogData.find((blog) => blog.id === blogId);

  if (!blog) {
    return <div>Blog not found!</div>;
  }

  return (
    <div className="full-blog">
      <h2>{blog.title}</h2>
      <img src={blog.image} alt={blog.title} />
      <p>{blog.content}</p>
      
    </div>
  );
};

export default FullBlog;
