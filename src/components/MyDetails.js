import React from 'react';
import { data } from '../data';
import Card from './card';
import './MyDetails.css';
import { BsFillBookmarkFill } from 'react-icons/bs';
import Avatar from '../images/profile.png';
import axios from 'axios';
import { BASE_URL } from '../Constants';
import { useEffect } from 'react';
import { useState } from 'react';


function MyDetails() {
  const [resData, setresData] = useState([])
  const [data, setData] = useState([])
  const getBookmarkedData = async () => {
    const uid = window.localStorage.getItem('uid')
    console.log(uid)
    const res = await axios.get(BASE_URL + `/bookmark/${uid}`)
    console.log(res.data.data)
    setresData(res.data.data)
  }

  const getBokmarkDetails = async (value) => {
    var arr = []
    if (resData) {
      for (var i = 0; i < resData.length; i++) {
        const res = await axios.get(BASE_URL + `/res/${resData[i].rid}`)
        arr.push(res.data.data)

        console.log(res.data.data)

      }
    }
    setData(arr)

  }

  useEffect(() => {
    getBookmarkedData()
  }, [])

  useEffect(() => {
    getBokmarkDetails()
  }, [])
  return (
    <div className='profile-page'>
      <h1> My details</h1>
      <div className='mydetailsContainer'>
        <div className="" onClick={() =>
          window.location.replace('/')
        }>Logout</div>
        <img src={Avatar} />
        <form>
          <label>
            Name
            <input type="text" name="name" />
          </label>
          <label>
            Phone Number
            <input type="text" name="phone" />
          </label>
          <label>
            Email Address
            <input type="text" name="email" />
          </label>
          <label>
            Address
            <input type="text" name="address" />
          </label>
          <div className='submit-box'>
            <input type='submit' className='submit' value='SAVE' />
            <input type='submit' className='submit' value='EDIT' />
          </div>


        </form>
      </div>
      <h1><BsFillBookmarkFill className='bookmark' />Starred</h1>
      <Card data={data} />
    </div>
  )
}

export default MyDetails;