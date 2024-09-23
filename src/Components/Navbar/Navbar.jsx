import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logoo from '../../Assets/logoo.png'
import { Link } from 'react-scroll';
import menuicon from '../../Assets/pageassets/menu-icon.png'



const Navbar = () => {

  const [sticky ,setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 580 ? setSticky(true) : setSticky(false);
    })
  },[])
  const [mobileMenu ,setMobileMenu] = useState(false);
  const togglemenu= ()=>{
    mobileMenu? setMobileMenu(false): setMobileMenu(true)
  }


  return (
    
    
   <nav className={`container ${sticky ? 'dark-nav': ''}`}>
    <Link to='hero' smooth={true} offset={0} duration={100}>
    <img className='logo' src={logoo} alt="" /></Link>
    <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><img src={logo} alt="Purvanchal Logo" /></li>
        <li> <Link to='about' smooth={true} offset={-260} duration={500}>About</Link></li>
        <li><Link to='entertainment' smooth={true} offset={-120} duration={500}>Entertainment</Link></li>
        <li><Link to='shop' smooth={true} offset={-130} duration={500}>Shops</Link></li>
        <li><Link to='dine' smooth={true} offset={-100} duration={500}>Dine</Link></li>
        
        <li><Link to='form' smooth={true} offset={-100} duration={300}><button className='btn'>Contact Now</button></Link></li>
    </ul>
    <img src={menuicon} alt=""  className='menu-icon' onClick={togglemenu}/>
    
   </nav>
  
  

  )}


export default Navbar
