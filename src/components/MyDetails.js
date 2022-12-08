import React from 'react';
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
  
    const res = await axios.get(BASE_URL + `/bookmark/${uid}`)
    // console.log(res.data.data)
    setresData(res.data.data)
  }

  const getBokmarkDetails = async (value) => {
    var arr = []
    
      for (var i = 0; i < resData.length; i++) {
        const res = await axios.get(BASE_URL + `/res/${resData[i].rid}`)
        arr.push(res.data.data[0])
      //  console.log(res.data)
      }
    // console.log(arr)
    setData(arr)

  }

  useEffect(() => {
    getBookmarkedData()
  }, [])

  useEffect(() => {
    getBokmarkDetails()
  }, [resData])
  return (
    <div className='profile-page'>
      <h1> My details</h1>
      <div className='mydetailsContainer'>
       <b> user id : {window.localStorage.getItem('uid')}</b>
        <img src={Avatar} />
        <form>
          <label>
            Name
            <input type="text" name="name" value={window.localStorage.getItem('name')}/>
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
          <button  className='submit' onClick={()=>alert('you can edit again only after 10 days')} >Edit</button>

          <button className="submit" onClick={() =>
          window.location.replace('/')
        }>Logout</button>
          </div>
        </form>
      </div>
      <h1><BsFillBookmarkFill className='bookmark' />Starred</h1>
      <Card data={data} />
    </div>
  )
}

export default MyDetails;