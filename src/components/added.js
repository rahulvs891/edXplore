import React from 'react';
import './added.css';
import {data} from '../data';
const Added = () => {
  const [cards, setcards] = React.useState(data);
  return (
  <div className='added-main'>
  <h1>Added</h1>
  <div className='added'>
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
  );
};
export default Added;