import React,{useState} from 'react';
import './Sidenav.css';

export default function Sidenav() {
  return (
    <div className='sideNavContainer'>
        <ul>
          <a href='/'><li>Home</li></a>
          <a href='/personal/profile'><li className='cont'>Profile</li></a>
          <a href='/personal/added'><li className='cont'>Added</li></a>
        </ul>
      
    </div>
  )
}
