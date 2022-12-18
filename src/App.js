import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import { BrowserRouter, Route, Routes } from 'react-router-dom'
// Importing pages from Pages component
import Home from "./components/Pages/Home"
import AboutUs from './components/Pages/AboutUs'
import Projects from './components/Pages/Projects'
import Blog from './components/Pages/Blog'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path = "/home" element = {<Home />} />
          <Route exact path = "/aboutus" element = {<AboutUs />} />
          <Route exact path = "/projects" element = {< Projects />} />
          <Route exact path = "/blog" element = {<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
