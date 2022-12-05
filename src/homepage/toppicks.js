import React from 'react';
import {data} from '../data';
import Card from '../components/card';
const Toppicks = () => {
  return (
  <div className='main-container'>
  <h1>Top Picks!</h1>
  <Card data={data}/>
  </div>
  );
};
export default Toppicks;