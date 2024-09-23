import React from 'react'
import './Skylounge.css'
import skylounge from '../../Assets/skylounge.jpeg'

const Skylounge = () => {
  return (
    <div className='lounge'>
    <div className="lounge-right">
         <img src={skylounge} alt="" />
    </div>
    <div className="lounge-left">
      <h3>Sky Lounge</h3>
     <h2>Experience a delightful meal at our Sky Lounge, where enchanting views meet a vibrant atmosphere. It’s the perfect place to escape the everyday hustle and enjoy joyful moments of leisure in the city.
     </h2>
      <ul>
        <li>Stunning Views: Enjoy breathtaking scenery while you dine.</li>
        <li>Relaxing Vibe: A perfect spot to unwind and celebrate special moments.
        </li>
      </ul>
    </div>
  </div>
  )
}

export default Skylounge
