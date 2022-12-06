import React from 'react';
import './added.css';
import {data} from '../data';
import Card from './card';
import Modal from './modal';
const Added = () => {
  return (
  <div className='added-main'>
  <h1>Added</h1>
    <Card data={data}/>
    <Modal/>
  </div>
  );
};
export default Added;