import { useEffect } from 'react'
import { preLoaderAnim } from '../../Animations'
import './preLoader.css'


const PreLoader = () => {

  useEffect(() =>{
    preLoaderAnim()
  },[])

  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Build</span>
        <span>With</span>
        <span>Brick</span>
      </div>
    </div>
  )
}

export default PreLoader