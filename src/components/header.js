import React from 'react';
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
            <a href='#'><img src={profile} className='profile'/></a>
            </div>
            <div className='custom-select'>
            <label for="catagory">Choose a catagory </label>
            <select name="catagory" id="cat" >
                  <option value="web development">web development</option>
                     <option value="data science">data science</option>
                  <option value="machine learning">machine learning</option>
                  <option value="data structures">data structures</option>
                  <option value="programming using c">programming using c</option>
            </select>
            </div>
            
        </div>
    );
}
export default Header;