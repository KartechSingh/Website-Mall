import React from 'react'
import './Landscape.css'
import landscape from '../../Assets/landscape.jpeg'

const Landscape = () => {
  return (
    <div className='land'>
    <div className="land-right">
         <img src={landscape} alt="" />
    </div>
    <div className="land-left">
      <h3>Landscaped Areas</h3>
      <h2>Experience the beautifully landscaped areas at Gulshan One29, designed for optimal comfort and relaxation.</h2>
      <ul>
        <li>Enhanced Wind Flow: Architectural blocking ensures better wind flow throughout the area.</li>
        <li>Shaded Spaces: Architectural massing, lush greenery, and misting ambiance provide natural shading.</li>
        <li>Pedestrian-Friendly: Free from vehicular movement, ensuring a safe and serene environment.</li>
        <li>Ample Greenery: Enjoy the beauty of a meticulously designed landscape with abundant greenery.</li>
      </ul>
    </div>
  </div>
  )
}

export default Landscape
