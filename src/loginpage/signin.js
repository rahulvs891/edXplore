import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import { BASE_URL } from '../Constants';
import axios from 'axios';
import { data } from '../data';
function SignIn() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value })
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await axios.post(BASE_URL + '/user/login', user)
    console.log(res.data)
    if (res.data.msg = "Logged in successfully") {
      alert(`welcome ${res.data.user.email}`)
      window.location.replace('/home')
      console.log(res.data.user.uid)
      window.localStorage.setItem('uid', res.data.user.uid)
      window.localStorage.setItem('name', res.data.user.username)
    }
  }
  return (
    <div className='login-page'>
      <div className='login-lt'>
        <h2 className='login-head'>Login To Your Account</h2>
        <input type="text" placeholder="email" name="email" value={user.email} onChange={handleChange} />
        <input type="password" placeholder="password" name='password' value={user.password} onChange={handleChange} />
        {/* <Link to="/home" > */}
        <button onClick={submitHandler}>Sign In</button>
        {/* </Link> */}
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
