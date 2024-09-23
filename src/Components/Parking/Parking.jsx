import React from 'react'
import './Parking.css'
import parkingimg from '../../Assets/Parking.jpeg'

const Parking = () => {
  return (
   <div className="parking-image">
    <img src={parkingimg} alt="" />
    <div className="parking-text">
        <h2>
        Enjoy hassle-free parking with our best-in-class
         app-based parking management system. 
         Experience convenience and efficiency as you
          easily find and 
        reserve your parking spot at Gulshan One29.
        </h2>
    </div>
   </div>
  )
}

export default Parking
