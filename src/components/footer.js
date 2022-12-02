import React from 'react'
import {BsInstagram,BsFacebook,BsTwitter} from 'react-icons/bs';
import './footer.css';
import logo from '../images/edXplore.png'
function Footer() {
  return (
    <div className='footer'>
      <div className='About-us'>
        <ul className='list'>
            <li><h3>Information</h3></li>
            <li>About Us</li>
            <li>FAQ</li>
            <li>Terms and Conditions</li>
        </ul>
      </div>
      <img src={logo} className='logo'/>
      <div className='contact'>
        <ul className='list'>
            <li><h3>Contact</h3></li>
            <li>contact no : +9454654545</li>
            <li><div className='social'><BsInstagram/><BsFacebook/><BsTwitter/></div></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
