import React from 'react'
import './Retail.css'
import shop from '../../Assets/shoppy.jpg'

const Retail = () => {
  return (
    <div className='shop'>
    <div className="shop-right">
         <img src={shop} alt="" />
    </div>
    <div className="shop-left">
      <h3>Shops</h3>
      <h2>Explore a world of exquisite fashion at Gulshan One29.
         Our shopping playground features dedicated spaces for popular 
         retail brands across the ground, first, and second floors.
      </h2>
      <ul>
        <li>Exclusive Shopping Experience: Easily hop between stores in a vibrant retail environment.</li>
        <li>Ample Frontage: Enjoy maximum shop visibility with a continuous retail facade.
        </li>
        <li>Signage Space: Adequate room for signage to enhance your shopping experience.
        </li>
      </ul>
    </div>
  </div>

  )
}

export default Retail
