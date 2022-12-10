import React from 'react'


const Navbar = () => {
  return (
    <>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/" >Blog</a>
        </li>
      </ul>
    </>
  )
}

export default Navbar