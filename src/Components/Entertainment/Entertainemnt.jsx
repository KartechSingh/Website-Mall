import React from 'react'
import './Entertainemnt.css'
import amphi from '../../Assets/openamphi.jpeg'

const Entertainemnt = () => {
  return (
    <div className='entertainment'>
      <div className="ent-left">
           <img src={amphi} alt="" />
      </div>
      <div className="ent-right">
        <h3>Amphitheatre</h3>
        <h2>Discover the sprawling 17,000 sq. ft. amphitheatre at Gulshan One29, where you can unwind and enjoy open-air performances amidst natural beauty.
        </h2>
        <ul>
            <li>Open-Air Theatre: Experience performances in an open-air setting surrounded by natural trees.
            </li>
            <li>Kiosks & Green Walls: Enjoy shopping at various kiosks and relax by the lush green walls.
            </li>
            <li>F&B Outlets: Savor delicious food and beverages from a variety of outlets.
            </li>
            <li>Naturally Cooled Plaza: Stay cool and comfortable in the naturally cooled plaza.
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Entertainemnt
