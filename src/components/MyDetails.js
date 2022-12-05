import React from 'react';
import {data} from '../data';
import Card from './card';
import './MyDetails.css';
import { BsFillBookmarkFill } from 'react-icons/bs';
import Avatar from '../images/profile.png';
 function MyDetails() {
  return (
    <div className='profile-page'>
      <h1> My details</h1>
    <div className='mydetailsContainer'>
      <img src={Avatar}/>
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
      <input type='submit' className='submit' value='SAVE'/>
      <input type='submit' className='submit' value='EDIT'/>
      </div>
</form>
    </div>
  <h1><BsFillBookmarkFill className='bookmark'/>Starred</h1>
    <Card data={data}/>
    </div>
  )
}

export default MyDetails;