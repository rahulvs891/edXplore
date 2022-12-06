import React from 'react';
import {Link} from 'react-router-dom';
import './login.css';
function SignIn() {
  return (
    <div className='login-page'>
        <div className='login-lt'>
          <h2 className='login-head'>Login To Your Account</h2>
            <input type="text" placeholder="email"/>
            <input type="password" placeholder="password"/> 
          <Link to="/home" >
            <button>Sign In</button>
          </Link>
        </div>
        <div className='login-rt'>
            <h2>New Here?</h2>
            <p>Sign up and discover a great amount of new oppurtunities !</p>
            <Link to="/signup" >
            <button>Sign Up</button>
          </Link>
        </div>
    </div>
  )
}

export default SignIn;
