import React from 'react';
import './card.css';
import { BiUpvote, BiDownvote } from 'react-icons/bi';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../Constants';
import { AiFillDelete } from 'react-icons/ai'
function Card({ data, type }) {

  const [vote, setVote] = useState("")
  const navigate = useNavigate()
  let url = "https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg"


  const changeVOte = async (value) => {
    console.log(value, vote)
    if (vote === "") return
    const res = await axios.post(BASE_URL + `/res/${value}`, {
      vote: vote
    })
    console.log(res.data)
  }

  const addBookmark = (value) => {
    const res = axios.post(BASE_URL + `/bookmark/${value}`, {
      uid: window.localStorage.getItem('uid')
    })
    console.log(res.data);
    alert("bookmark added")
  }

  // const deleteHandler = async (value) => {
  //   const res = await axios.delete(BASE_URL + `/res/${value}`)
  //   console.log(res.data)

  // }
  return (
    <div className='card-container'>
      {
        data?.map((card, key) => {

          return (
            <div className='card' key={key} >
              <img src={url} />
              <div className='details'>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between"
                }} className="">
                <h2></h2>
                <h2>{card.title}</h2>
                <h5>{card.uid}</h5>
                </div>
                <p>{card.description}</p>
                <div className="votes">
                  <span onClick={() => {
                    setVote("up")
                    changeVOte(card.rid)
                  }}>
                    <BiUpvote />
                    &nbsp;
                    {card.upvote}
                  </span>
                  <span className='' onClick={() => {
                    setVote("down")
                    changeVOte(card.rid)
                  }}>
                    <BiDownvote />
                    &nbsp;
                    {card.downvote}
                  </span>

                  <span className='star' onClick={() => addBookmark(card.rid)}>
                    <BsFillBookmarkFill />
                  </span>
                  {type === "added" && card.uid == window.localStorage.getItem('uid') && <span className=''
                  // onClick={deleteHandler(card.rid)}
                  >
                    <AiFillDelete />
                  </span>
                  }
                </div>
                <div className='button' onClick={() => window.location.href = card.link}>Open</div>
              </div>

            </div>
          );
        })

      }
    </div>
  )
}

export default Card