import React from 'react'
import {FaLinkedin} from 'react-icons/fa';
import {BsGithub} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
const HeaderSocail = () => {
  return (
    <div className='header__socail'>
       <a href="https://www.linkedin.com/in/tanamay-singh-495b0b221/"  target="_blank" rel="noreferrer" ><FaLinkedin /></a>
       <a href="github.com/tanamaay"  target="_blank" rel="noreferrer" ><BsGithub/></a>
       <a href="https://www.instagram.com/itz_tanmaysingh12/?hl=en" target="_blank" rel="noreferrer" ><BsInstagram/></a>
       
    </div>
  );
};

export default HeaderSocail;