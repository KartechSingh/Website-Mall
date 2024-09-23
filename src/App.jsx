import React, { useEffect, useState } from 'react'

import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Title from './Components/Title/Title';
import Entertainemnt from './Components/Entertainment/Entertainemnt';
import Inox from './Components/Inox/Inox';
import Retail from './Components/Retail/Retail';
import Dine from './Components/Dine/Dine';
import Skylounge from './Components/Skylounge/Skylounge';
import Landscape from './Components/Landscape/Landscape';
import Parking from './Components/Parking/Parking';
import Location from './Components/Location/Location';
import Contact from './Components/Contact/Contact';
import Footer from './Footer/Footer';
import Whatsapp from './Components/Whatsapp/Whatsapp';



const App = () => {



  return (
    <div>
      <Navbar/>
       <Hero />
       <Whatsapp/>
      
      <div className="container ">
        <Title subtitle = 'Gulshan One29' subtitleText = 'An Unparalleled Shopping and Lifestyle Experience'/>
        <About/>
        <Title subtitle = "Entertainment"/>
        <Entertainemnt/>
        <Inox/>
        <Title subtitle='Retail & Fashion' />
        <Retail/>
        <Title subtitle='Fine Dining'/>
        <Dine/>
        <Skylounge/>
        <Title subtitle='Spaces'/>
        <Landscape/>
        <Title subtitle='Parking'/>
        <Parking/>
        <Title subtitle='Location'/>
        <Location/>
        <Title subtitle="Get in Touch with Us!" subtitleText='Have questions or need more information? We’d love to hear from you! Contact us today to learn more about Gulshan One29, our offerings, and upcoming events.'/>
        <Contact/>
        <Footer/>
        
        
        
        
        
      </div>
      
      
    </div>
  )
}

export default App
