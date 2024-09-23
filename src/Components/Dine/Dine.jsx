import React from 'react'
import './Dine.css'
import dine from '../../Assets/dinee.jpg'

const Dine = () => {
  return (
     
    <div className='dine'>
    <div className="dine-right">
         <img src={dine} alt="" />
    </div>
    <div className="dine-left">
      <h3>Dine</h3>
      <h2>Satisfy your cravings at Gulshan One29, where dining experiences are as diverse as your tastes. Enjoy delicious meals at our food court, sky bar, and cafes, perfect for any occasion.

      </h2>
      <ul>
        <li>Variety of Options: From mid-day lunches to after-work happy hours.
        </li>
        <li>Perfect for Every Occasion: Ideal for date nights and weekend brunches.</li>
      </ul>
    </div>
  </div>
  )
}

export default Dine
