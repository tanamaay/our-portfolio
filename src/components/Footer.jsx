import React from 'react'
import './footer.css';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaAngellist } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer>
        <a href='#home' className='footer__logo'>Tanmay singh</a>
        <ul className='links'>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
        </ul>
        <div className='footer__socials'>
            <a href=''><BsLinkedin /></a>
            <a href=''><FaGithub /></a>
            <a href=''><FaAngellist /></a>
        </div>
        <div className='footer__copyright'>
            <small >&copy; ET 2022 All right resvered.</small>
        </div>
    </footer>
  )
}

export default Footer