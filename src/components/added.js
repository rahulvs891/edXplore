import React from 'react';
import './added.css';
import { data } from '../data';
import Card from './card';
import Modal from './modal';
import axios from 'axios';
import { BASE_URL } from '../Constants';
import { useState } from 'react';
import { useEffect } from 'react';

const Added = () => {
  const [data, setData] = useState([])

  const AddedResource = async () => {
    const uid = window.localStorage.getItem('uid')
    const res = await axios.get(BASE_URL + `/res/user/165860404`)
    console.log(res.data.data)
    setData(res.data.data)
  }


  useEffect(() => {
    AddedResource()
  }, [])
  return (
    <div className='added-main'>
      <h1>Added</h1>
      <Card data={data} type="added" />
      <Modal />
    </div>
  );
};
export default Added;