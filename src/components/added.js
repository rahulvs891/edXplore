import React from 'react';
import './added.css';
import {data} from '../data';
import Card from './card';
const Added = () => {
  return (
  <div className='added-main'>
  <h1>Added</h1>
    <Card data={data}/>
  </div>
  );
};
export default Added;