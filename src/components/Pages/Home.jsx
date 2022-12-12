import React from 'react'
import architecture from './architecture.jpg'

const Home = () => {
  return (
    <div>
      <h1>
        Best architecture in Nepal.
      </h1>
      <h2>Team of talented people.</h2>
      <div>
        <img src = {architecture} alt = "architecture.jpg" />
      </div>
    </div>
  )
}

export default Home