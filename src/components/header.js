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
            <a href='/personal/profile'><img src={profile} className='profile'/></a>
            </div>
            <div className='custom-select'>
            <select name="catagory" id="cat" >
                  <option value="0">CATAGORIES</option>
                  <option value="web development"><a href='#'>web development</a></option>
                  <option value="data science"><a href='#'>data science</a></option>
                  <option value="machine learning"><a href='#'>machine learning</a></option>
                  <option value="data structures"><a href='#'>data structures</a></option>
                  <option value="programming using c"><a href='#'>programming using c</a></option>
            </select>
            </div>
            
        </div>
    );
}
export default Header;