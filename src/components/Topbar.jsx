import React, { useState } from 'react';
import './topbar.css';

import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';



const Topbar = () => {
    const[activeNav,setActiveNav] =useState('#home');
  return (
    <nav>
        <a href='#Home' onClick={()=> setActiveNav('#home')} className={activeNav=='#home' ? 'active': ''}><AiOutlineHome /></a>
        <a href='#About' onClick={()=> setActiveNav('#about')} className={activeNav=='#about' ? 'active': ''}><AiOutlineUser /></a>
        <a href='#Experiance' onClick={()=> setActiveNav('#experiance')} className={activeNav=='#experiance' ? 'active': ''}><BiBook /></a>
        <a href='#Portfolio' onClick={()=> setActiveNav('#portfolio')} className={activeNav=='#portfolio' ? 'active': ''}>< RiServiceLine /></a>
        <a href='#Contact' onClick={()=> setActiveNav('#contact')} className={activeNav=='#contact' ? 'active': ''}><BiMessageSquareDetail /></a>
        
        
    </nav>
  )
}

export default Topbar