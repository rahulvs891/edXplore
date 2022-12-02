import React from 'react';
import './toppicks.css';
import {data} from '../data';
const Toppicks = () => {
  const [cards, setcards] = React.useState(data);
  return (
  <>
  <div className='container'>
  <h1>Top Picks!</h1>
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
  </>
  );
};
export default Toppicks;