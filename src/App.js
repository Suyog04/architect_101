import React from 'react'


import { BrowserRouter, Route, Routes } from 'react-router-dom'
// Importing pages from Pages component
import Home from "./Pages/Home/Home"
import AboutUs from './Pages/AboutUs/AboutUs'
import Projects from './Pages/Projects/Projects'
import Blog from './Pages/Blog/Blog'

const App = () => {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route exact path = "/" element = {<Home />} />
          <Route exact path = "/aboutus" element = {<AboutUs />} />
          <Route exact path = "/projects" element = {< Projects />} />
          <Route exact path = "/blog" element = {<Blog />} />
        </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
