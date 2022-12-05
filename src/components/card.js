import React from 'react';
import './card.css';
function Card({data}) {
  
  const [cards, setcards] = React.useState(data);
  return (
    <div className='card-container'>
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
  )
}

export default Card