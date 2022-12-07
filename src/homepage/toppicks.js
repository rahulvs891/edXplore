import React, { useEffect } from 'react';
import { data } from '../data';
import Card from '../components/card';
import axios from 'axios';
import { BASE_URL } from '../Constants';
const Toppicks = () => {
  const [cardData , setCardData] = React.useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(BASE_URL + '/res')
      console.log(res.data.data)
      setCardData(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='main-container'>
      <h1>Top Picks!</h1>
      <Card data={cardData} />
    </div>
  );
};
export default Toppicks;