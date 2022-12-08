import React, { useEffect } from 'react';
import { data } from '../data';
import Card from '../components/card';
import axios from 'axios';
import { BASE_URL } from '../Constants';
const Toppicks = () => {
  const [cardData, setCardData] = React.useState([]);

  const [categories, setCategories] = React.useState([])

  const fetchData = async () => {
    try {
      const res = await axios.get(BASE_URL + '/res')
      console.log(res.data.data)
      setCardData(res.data.data)
     
     
    } catch (error) {
      console.log(error)
    }
  }

  //sort cardData by upvote

  const sortData = () => {
    const sortedData = cardData.sort((a, b) => {
      return b.upvote - a.upvote
    })
    setCardData(sortedData)
  }


  const fetchCategories = async () => {
    var arr = []

    for (var i = 0; i < cardData.length; i++) {
      if (!arr.includes(cardData[i].category.toLowerCase())) {
        arr.push(cardData[i].category.toLowerCase())
      }
    }
    setCategories(arr)
    console.log(categories.length)

  }
  //sort cardData by rating


  useEffect(() => {
    fetchData()
    
  }, [])
  useEffect(() => {
    fetchCategories()
    sortData()
  }, [cardData])
  const filterCategory = (category) => {
    console.log(category)
    const filteredData = cardData.filter((data) => {
      return data.category.toLowerCase() === category.toLowerCase()
    })
    setCardData(filteredData)
  }
  return (
    <div className="">
     {/* <button type="button" class="btn btn-lg btn-info  btn-w-25 text-light"  aria-expanded="false" onClick={sortData}>Sort</button> */}
      <div className="btn-group float-end m-3">
        <button type="button" class="btn btn-lg btn-info dropdown-toggle btn-w-25 text-light" data-bs-toggle="dropdown" aria-expanded="false">Catagories</button>
        <ul className="dropdown-menu">
          {categories.length > 0 && categories?.map((category) => {
            return (
              <li><a className="dropdown-item fs-4" href="#" onClick={() => filterCategory(category)}>{category}</a></li>
            )
          })}

        </ul>
      </div>
      <div className='main-container'>

        <h1>Top Picks!</h1>
        <Card data={cardData} />
      </div>
    </div>
  );
};
export default Toppicks;