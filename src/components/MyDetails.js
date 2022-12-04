import React from 'react';
import {data} from '../data';
import './MyDetails.css';
import { BsFillBookmarkFill } from 'react-icons/bs';
import Avatar from '../images/profile.png';
 function MyDetails() {
     const [cards, setcards] = React.useState(data);
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
    <div className='starred'>
  {
    cards.map((card) =>{
      const {image, name,decr} = card;
      return(
        <div className='card'>
          <img src={image}/>
          <div className='details'>
          <h2>{name}</h2>
          <p>{decr}</p>
          </div>
        </div>
      );
    })
    
  }
  </div>
    </div>
  )
}

export default MyDetails;