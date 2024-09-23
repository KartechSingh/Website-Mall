import React from 'react'
import './Whatsapp.css'
import phone from '../../Assets/call.png'
import whatsapp from '../../Assets/social.png'

const Whatsapp = () => {
  return (
 <div className="contact-icon">
          <div className="contactimg">
            <a href="https://wa.me/919999142233" target='_blank'>
          
          <img src={whatsapp} alt=""  />

          </a>
          <a href="tel:+919999142233" target='_blank'>
          <img src={phone} alt="" />
          </a>
          </div>
       </div> 
  )
}

export default Whatsapp
