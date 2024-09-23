import React from 'react';
import './About.css';
import amphitheatre from '../../Assets/amphitheatre.jpeg';
import community from '../../Assets/community.jpeg';
import retail from '../../Assets/retail.jpeg';
import connectivity from '../../Assets/connectivity.jpeg';
import prime from '../../Assets/prime.jpeg';
import sust from '../../Assets/sustainibility.jpeg';
import business from '../../Assets/business.jpg';
import companies from '../../Assets/companies.jpeg';
import workforce from '../../Assets/workforce.jpeg';



const About = () => {
  return (
    <div className='about'>
        <div className="about-image">
          <img src={amphitheatre} alt="" />
          <div className="caption">
            <h2>Festivity Plaza</h2>
            <p> The perfect chill spot</p>
          </div>
        </div>
        <div className="about-image">
          <img src={community} alt="" />
          <div className="caption">
            <h2>Thriving Community</h2>
            <p> 2.5 lakh residents in 5 km radius</p>
          </div>
        </div>
        <div className="about-image">
          <img src={retail} alt="" />
          <div className="caption">
            <h2>Exclusive Retail Complex</h2>
            <p> Noida Expressway's only multiplex <br/> &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;and retail hub</p>
          </div>
        </div>
        <div className="about-image">
          <img src={connectivity} alt="" />
          <div className="caption">
            <h2>Seamless Connectivity</h2>
            <p> Convenient road and metro access</p>
          </div>
        </div>
        <div className="about-image">
          <img src={prime} alt="" />
          <div className="caption">
            <h2>Prime Location</h2>
            <p> Near upcoming Noida Airport and Film City</p>
          </div>
        </div>
        <div className="about-image">
          <img src={sust} alt="" />
          <div className="caption">
            <h2>Sustainability Focus</h2>
            <p> Ensuring long-term maintenance <br/> and lease control</p>
          </div>
        </div>
        <div className="about-image">
          <img src={business} alt="" />
          <div className="caption">
            <h2>Lucrative Business</h2>
            <p> Ideal for growth and visibility</p>
          </div>
        </div>
        <div className="about-image">
          <img src={companies} alt="" />
          <div className="caption">
            <h2>Proximity to Fortune  <br/> &nbsp; &nbsp; 500 Companies</h2>
            <p> Near KPMG, Dell, Accenture, <br/>Sapient, Adobe, and more</p>
          </div>
        </div>
        <div className="about-image">
          <img src={workforce} alt="" />
          <div className="caption">
            <h2>Vast Workforce</h2>
            <p>About 1.35 lakh professionals <br/> &nbsp; &nbsp;  &nbsp; in nearby tech zones</p>
          </div>
        </div>
       
    </div>
  )
}

export default About
