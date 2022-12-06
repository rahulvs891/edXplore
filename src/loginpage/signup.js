import React from 'react';
import {Link} from 'react-router-dom';
import './login.css';
function SignUp() {
  return (
    <div className='login-page'>
        <div className='login-lt'>
            <h2 className='login-head'>Create New Account</h2>
            <input type="text" placeholder="email"/>
            <input type="password" placeholder="create password"/> 
            <input type="password" placeholder="confirm paddword"/> 
            <Link to="/home" >
            <button>Sign Up</button>
          </Link>
        </div>
        <div className='login-rt'>
            <h2>Already A User?</h2>
            <p>Sign In and discover a great amount of new oppurtunities !</p>
            <Link to="/" >
            <button>Sign In</button>
          </Link>
        </div>
    </div>
  )
}

export default SignUp;
