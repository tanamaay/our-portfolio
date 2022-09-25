import React from 'react'
import CTA from './CTA';
import './header.css';
import HeaderSocail from './HeaderSocail';

const Header = () => {
  return (
    <header id='home'>
        <div className='container header__container'>
            <h5>Hello I'am </h5>
            <h1>Tanamay singh</h1>
            <h5 className='text-light'>Frontend Developer</h5>
            <CTA/>
            <a href="#contact" className="scroll__down">
            Scroll Down
            </a>
            <HeaderSocail/>
        </div>
    </header>
  )
}

export default Header;