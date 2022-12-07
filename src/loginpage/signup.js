import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../Constants';
import axios from 'axios';
import './login.css';
function SignUp() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: ""
  })
  const [pass, setPass] = useState("")

  const submitHandler = async (e) => {
    e.preventDefault()

    if (user.password !== pass) {
      alert("passwords do not match")
    }
    const res = await axios.post(BASE_URL + '/user/', user)
    console.log(res.data)
    if (res.data.msg) {
      alert(res.data.msg)
      window.location.replace('/')
    }


  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value })

  }
  return (
    <div className='login-page'>
      <div className='login-lt'>
        <h2 className='login-head'>Create New Account</h2>
        <input type="text" placeholder="email" name="email" onChange={handleChange} value={user.email} />
        <input type="text" placeholder="username" name="username" onChange={handleChange} value={user.username} />
        <input type="password" placeholder="create password" name="password" onChange={handleChange} value={user.password} />
        <input type="password" placeholder="confirm password" onChange={(e) => setPass(e.target.value)} value={pass} />
        <Link to="/home" >
          <button onClick={submitHandler}>Sign Up</button>
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
