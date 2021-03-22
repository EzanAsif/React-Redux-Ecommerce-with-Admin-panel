import React, {useState} from "react";
// import Junto from '../assets/junto-logo.png'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import './styles.css'

import {Link} from 'react-router-dom'


const SiteNav = () => {

  const [Click, setClick] = useState(false)
  const [Navbar, setNavbar] = useState(false)

  const handleClick = () => {
    setClick(!Click)
  }

  const closeMobileMenu = () => {setClick(false)}

  const changeBackground = () => {
    if (window.scrollY >= 50){
      setNavbar(true)
    }
    else{
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground)
  

  return (
    <>
      <nav className={Navbar ? 'navbar active' : 'navbar'}>
        <div className="navbar-container">
          <a href="/" className = "navbar-logo" onCLick = {closeMobileMenu}><img src="https://cdn.shopify.com/s/files/1/2406/5155/files/esntls_logo_black_75x.png?v=1555179274" /></a>
          <div className="menu-icon" onClick = {handleClick}>
            <i>{Click ? <CloseIcon/> : <MenuIcon/>}</i>
          </div>
          <ul className = {Click ? 'nav-menu active' : 'nav-menu'}>
              <li className = 'nav-item'>
                <a href="/" className = 'nav-links' onClick = {closeMobileMenu}>
                  Home
                </a>
              </li>
              <li className = 'nav-item'>
                <a href="/" className = 'nav-links sale' onClick = {closeMobileMenu}>
                  Sale!
                </a>
              </li>
              <li className = 'nav-item'>
                <a href="/" className = 'nav-links' onClick = {closeMobileMenu}>
                  Collections  
                </a>
              </li>
              <li className = 'nav-item'>
                <a href="/" className = 'nav-links' onClick = {closeMobileMenu}>
                  Contact Us 
                </a>
              </li>
          </ul>
              <div className="nav-icons">
                <a className = "admin-icon"><PersonIcon/></a>
                <a className = "cart-icon"><ShoppingCartIcon/></a>
              </div>
        </div>
      </nav>
    </>
  );
};

export default SiteNav;