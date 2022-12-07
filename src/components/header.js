import React,{useState} from 'react';
import '../components/header.css';
import logo from '../images/edXplore.png';
import { FiSearch } from 'react-icons/fi';
import profile from '../images/profile.png'
function Header (){ 
    return(
        <div className='head'>
            <div className='header'>
            <img src={logo} className="logo"/>
            <div class="search-bar">
                <input type="text" className='box' placeholder='         search your resources here ... '></input>
                <a href='#'><FiSearch/></a>
            </div>
            <a href='/personal/profile'><img src={profile} className='profile'/></a>
            </div>
            
            
        </div>
    );
}
export default Header;