// import { useState } from "react";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile"
import './Header.css'
import  { restaurants } from '../../data/restaurant'
console.log(restaurants.length);
function Header() {
  return (
  <header className='header'>
    <HeaderDesktop />
    <HeaderMobile />
  </header>
  
  )
}

export default Header