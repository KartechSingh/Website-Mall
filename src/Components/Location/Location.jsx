import React from 'react'
import './Location.css'

const Location = () => {
  return (
    <div className='location'>
      <div className="address">
        <div>
        Plot No C3 & E1,<br/> 
        Noida-Greater Noida Expy, Sector 129 <br/>
        Noida, Uttar Pradesh 201301
        </div>
      </div>
      <div className="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.038014175076!2d77.38450397495215!3d28.50850398970319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce885cca2777d%3A0x1560d3a299adc010!2sGulshan%20One29!5e0!3m2!1sen!2sin!4v1721753365417!5m2!1sen!2sin" 
      width="600" height="450" 
       allowFullScreen="" loading="lazy" ></iframe>
      </div>
    </div>
  )
}

export default Location
