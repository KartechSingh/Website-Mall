import React from 'react'
import './Hero.css'
import dark_arrow from '../../Assets/pageassets/dark-arrow.png'
import { Link } from 'react-scroll'




const Hero = (props) => {
  return (
  <div className='hero container'>
       <div className="hero-text">
        <h1>Experience the Finest Shopping and Dining at Gulshan One29</h1>
        </div>
        <div>
        <Link to='form' smooth={true} offset={-100} duration={300}>
        <button className='btn'>Enquiry Now
        <img src={dark_arrow} alt="" /></button></Link>
        
       
       </div>
      
    </div>)
  
}

export default Hero
