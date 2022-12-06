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
            <div className="btn-group float-end m-3">
            <button type="button" class="btn btn-lg btn-info dropdown-toggle btn-w-25 text-light" data-bs-toggle="dropdown" aria-expanded="false">Catagories</button>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item fs-4" href="#">web development</a></li>
                 <li><a className="dropdown-item fs-4" href="#">data science</a></li>
                <li><a className="dropdown-item fs-4" href="#">machine learning</a></li>
                <li><a className="dropdown-item fs-4" href="#">data structures</a></li>
                <li><a className="dropdown-item fs-4" href="#">programming using C++</a></li>
            </ul>
            </div>
            
        </div>
    );
}
export default Header;