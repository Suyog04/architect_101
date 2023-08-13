import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
// Importing pages from Pages component
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Projects from './Pages/Projects/Projects'

import BlogList from "./Pages/Blog/Blog";
import FullBlog from "./Pages/Blog/FullBlog";



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path = "/projects" element = {< Projects />} />
          <Route exact path="/blog/*" element={<BlogRoutes />} />
   
        </Routes>
      </BrowserRouter>
    </>
  );
};

const BlogRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<BlogList />} />
      <Route path="/:id" element={<FullBlog />} />
    </Routes>
  );
};

export default App;
