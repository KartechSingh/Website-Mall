import React from 'react'
import './Inox.css'
import inoximage from '../../Assets/inoximage.jpg'

const Inox = () => {
  return (
    
    <div className='inox'>
    <div className="inox-right">
         <img src={inoximage} alt="" />
    </div>
    <div className="inox-left">
      <h3>Inox</h3>
      <h2>Get ready for an unforgettable movie experience at our 6-screen, 1,175-seater multiplex featuring INOX. Perfect for entertainment enthusiasts, this fully equipped cinema is designed for your comfort.
      </h2>
      <ul>
         <li>Exciting Films: Enjoy a wide selection of adrenaline-pumping movies.
         </li>
         <li>Comfortable Setting: Experience ultimate comfort for an enjoyable outing.</li>
      </ul>
    </div>
  </div>

      
   
  )
}

export default Inox
