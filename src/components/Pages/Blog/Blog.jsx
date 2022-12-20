import React from 'react'
import '../Blog/Blog.css'

const Blog = () => {
  return (
    <>
      <section className = "main-container_02">
          <ul className="nav1_02">
            <li className="navitem_02">
              <a className="navlink_02" href="/">Home</a>
            </li>
            <li className="navitem_02">
              <a className="navlink_02" href="/projects">Projects</a>
            </li>
            <li className="navitem_02">
              <a className="navlink_02" href="/aboutus">About Us</a>
            </li>
            <li className="navitem_02">
              <a className="navlink_02" href="/blog" >Blog</a>
            </li>
          </ul>
        <div className = "home-heading_02">
          <h1>
            Blog
          </h1>
        </div>
      </section>
    </>
  )
}

export default Blog