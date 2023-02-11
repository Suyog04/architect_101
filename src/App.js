import React from 'react'


import { BrowserRouter, Route, Routes } from 'react-router-dom'
// Importing pages from Pages component
import Home from "./Pages/Home/Home"
import AboutUs from './Pages/AboutUs/AboutUs'
import Projects from './Pages/Projects/Projects'
import Blog from './Pages/Blog/Blog'
import Commercial from './Pages/Projects/commercial/Commercial'
import Recreational from './Pages/Projects/recreational/Recreational'
import Industrial from './Pages/Projects/industrial/Industrial'

const App = () => {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route exact path = "/" element = {<Home />} />
          <Route exact path = "/aboutus" element = {<AboutUs />} />
          <Route exact path = "/projects" element = {< Projects />} />
          <Route exact path = "/blog" element = {<Blog />} />
          <Route exact path = "/commercial" element = {<Commercial />} />
          <Route exact path = "/recreational" element = {<Recreational />} />
          <Route exact path = "/industrial" element = {<Industrial />} />
        </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
