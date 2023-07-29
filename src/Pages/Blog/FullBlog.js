import React from "react";
import { useParams} from "react-router-dom";
import blogData from "./data.json";
import './FullBlog.css'

const FullBlog = () => {
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
